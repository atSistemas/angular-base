
import { DebugElement } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpModule } from '@angular/http'
import { By } from '@angular/platform-browser'
import { RequestEffect } from 'base/effects/request.effect'
import { EffectsModuleImport, StoreModuleImport } from 'base/imports'
import { fakeResponse } from 'base/shared/Utils'
import { expect } from 'chai'
import { Map, Record } from 'immutable'
import { fakeServer, SinonFakeServer } from 'sinon'

import { WeatherActions } from '../actions/weather.actions'
import {
  ForecastComponent,
  ForecastDetailComponent,
  MapComponent,
  StationInfoComponent,
  StationMarkerComponent
} from '../components'
import { OWM_API_FORECAST, OWM_API_STATION } from '../config'
import { IForecast } from '../models/forecast.model'
import { HumidityPipe, PressurePipe, TemperaturePipe } from '../pipes'
import { WeatherMapService } from '../services'
import { WeatherContainer } from '../weather.container'
import { GoogleMapsModule } from '../weather.module'

describe('Integration tests in Weather Container', () => {
  let container: WeatherContainer
  let mapComponent: MapComponent
  let fixture: ComponentFixture<WeatherContainer>
  let de: DebugElement
  let deMap: DebugElement
  let el: HTMLElement
  let server: SinonFakeServer

  const MockStations = require('mocks/stations.json')
  const MockForecast01 = require('mocks/forecast01.json')
  const MockForecast02 = require('mocks/forecast02.json')

  beforeEach(() => {
    server = fakeServer.create()
    server.respondWith(
      'GET',
      OWM_API_STATION(),
      fakeResponse(200, MockStations)
    )
    server.respondWith(
      'GET',
      OWM_API_FORECAST(1, 1),
      fakeResponse(200, MockForecast01)
    )
    server.respondWith(
      'GET',
      OWM_API_FORECAST(2, 2),
      fakeResponse(200, MockForecast02)
    )
    server.respondImmediately = true
  })

  beforeEach((done) => {
    TestBed.configureTestingModule({
      declarations: [
        WeatherContainer,
        MapComponent,
        ForecastComponent,
        StationInfoComponent,
        StationMarkerComponent,
        ForecastDetailComponent,
        HumidityPipe,
        PressurePipe,
        TemperaturePipe
      ],
      imports: [
        HttpModule,
        GoogleMapsModule,
        StoreModuleImport,
        EffectsModuleImport
      ],
      providers: [
        RequestEffect,
        WeatherActions,
        WeatherMapService
      ]
    })
    .compileComponents()
    .then(done)
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherContainer)
    fixture.detectChanges()
    container = fixture.componentInstance

    de = fixture.debugElement
    el = de.nativeElement

    deMap = de.query(By.css('weather-map'))
    mapComponent = deMap.componentInstance
  })

  afterEach(() => {
    container.ngOnDestroy()
    TestBed.resetTestingModule()
    server.restore()
  })

  describe('Layout', () => {
    it('should render 3 mock stations', (done) => {
      container.stations$.first((result) => result.size > 0).subscribe((result) => {
        fixture.detectChanges()

        expect(container.stations.size).to.equal(3)

        const elmap: HTMLElement = deMap.nativeElement
        const stationsMarkers: number = elmap.firstElementChild.childElementCount - 1
        expect(stationsMarkers).to.equal(3)

        expect(mapComponent.stations.count()).to.equal(3)

        done()
      })
    })
    it('should not render any forecast', () => {
      const forecastEl = fixture.debugElement.query(By.css('weather-forecast'))
      expect(forecastEl).to.equal(null)
    })
  })

  describe('Behaviour', () => {
    it('should render a forecast after selecting a station', (done) => {
      container.stations$
      .first((result) => result.size > 0)
      .subscribe((result) => {
        fixture.detectChanges()

        const deNgui: DebugElement = deMap.query(By.css('ngui-map'))
        const deStation: DebugElement = deNgui.queryAll(By.css('weather-station-marker'))[0]
        const stationComponent: StationMarkerComponent = deStation.componentInstance
        stationComponent.onSelectStation()
      })

      container.forecasts$
      .first((result) => result.size > 0)
      .subscribe(() => {
        fixture.detectChanges()
        expect(container.hasForecast).to.equal(true)

        const deForecast: DebugElement = de.query(By.css('weather-forecast'))
        expect(deForecast).to.not.equal(null)
        const forecastComponent: ForecastComponent = deForecast.componentInstance
        expect(forecastComponent.forecasts.size).to.be.gt(0)

        const deForecastDetails: DebugElement[] = deForecast.queryAll(By.css('weather-forecast-detail'))
        expect(deForecastDetails.length).to.be.gt(0)
        const forecastDetailComponent: ForecastDetailComponent = deForecastDetails[0].componentInstance
        expect(forecastDetailComponent.forecast).to.not.equal(null)

        done()
      })
    })
    it('should render other forecast after selecting other station', (done) => {
      let forecasts: Map<number, Record<IForecast>>
      let forecastDetail: HTMLElement
      container.stations$
      .first((result) => result.size > 0)
      .subscribe((result) => {
        fixture.detectChanges()
        /* Selecting first station */
        const deNgui: DebugElement = deMap.query(By.css('ngui-map'))
        const deStation: DebugElement = deNgui.queryAll(By.css('weather-station-marker'))[0]
        const stationComponent: StationMarkerComponent = deStation.componentInstance
        stationComponent.onSelectStation()
      })
      container.forecasts$
      .distinct((result) => result.get(0).getIn(['dt']))
      .subscribe((result) => {
        fixture.detectChanges()
        const deForecast: DebugElement = de.query(By.css('weather-forecast'))
        const deForecastDetails: DebugElement[] = deForecast.queryAll(By.css('weather-forecast-detail'))
        /* Forecasts comparison */
        if (!forecasts && !forecastDetail) {
          forecasts = result
          forecastDetail = deForecastDetails[0].nativeElement
        } else {
          expect(forecasts).to.be.not.equal(result)
          expect(forecastDetail).to.be.not.equal(deForecastDetails[0].nativeElement)
          done()
        }
        /* Selecting second station */
        const deNgui: DebugElement = deMap.query(By.css('ngui-map'))
        const deStation: DebugElement = deNgui.queryAll(By.css('weather-station-marker'))[1]
        const stationComponent: StationMarkerComponent = deStation.componentInstance
        stationComponent.onSelectStation()
        fixture.detectChanges()
      })
    })
  })
})
