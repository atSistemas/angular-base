import 'base/imports/polyfills';
import 'base/imports/rx';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { NguiMapModule } from '@ngui/map';
import { expect } from 'chai';
//import {  } from 'sinon';

import { Observable } from '../../../../base/imports/rx';
import { StoreModuleImport, EffectsModuleImport } from '../../../../base/imports';
import { RequestEffect } from '../../../../base/effects/request.effect';
import { WeatherActions } from '../actions/weather.actions';
import { WeatherContainer } from '../weather.container';
import { GoogleMapsModule } from '../weather.module';
import * as WeatherComponents from '../components';
import { WeatherMapService } from '../services';
import * as WeatherPipes from '../pipes';
import { MapComponent } from '../components/map/map.component';
import { ForecastComponent } from '../components/forecast/forecast.component';
import { StationMarkerComponent } from '../components/station-marker/station-marker.component';
import { ForecastDetailComponent } from '../components/forecast-detail/forecast-detail.component';

describe('Integration tests in Weather Container', () => {
  let container: WeatherContainer;
  let mapComponent: MapComponent;
  let fixture: ComponentFixture<WeatherContainer>;
  let de: DebugElement;
  let deMap: DebugElement;
  let el: HTMLElement;

  // TODO: Mock weather station service responses

  beforeEach((done) => {
    TestBed.configureTestingModule({
      imports: [
        StoreModuleImport,
        EffectsModuleImport,
        HttpModule,
        GoogleMapsModule
      ],
      declarations: [
        WeatherContainer,
        ...Object.values(WeatherComponents),
        ...Object.values(WeatherPipes)
      ],
      providers: [
        WeatherActions,
        WeatherMapService,
        RequestEffect
      ]
    })
    .compileComponents()
    .then(done);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherContainer);
    fixture.detectChanges();
    container = fixture.componentInstance;

    de = fixture.debugElement;
    el = de.nativeElement;

    deMap = de.query(By.css('weather-map'));
    mapComponent = deMap.componentInstance;
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  describe('Before onInit', () => {
    it('should not render any station', () => {
      expect(container.stations.size).to.equal(0);
    });
    it('should not render any forecast', () => {
      const forecastEl = fixture.debugElement.query(By.css('weather-forecast'));
      expect(forecastEl).to.equal(null);
    });
  });

  describe('After onInit', () => {
    it('should render 230 stations', done => {
      container.stations$.first(result => result.size > 0).subscribe(result => {
        fixture.detectChanges();

        expect(container.stations.size).to.equal(230);

        const elmap: HTMLElement = deMap.nativeElement;
        const stationsMarkers: number = elmap.firstElementChild.childElementCount - 1;
        expect(stationsMarkers).to.equal(230);

        expect(mapComponent.stations.count()).to.equal(230);

        done();
      });
    });
    it('should render a station info after hover a station', done => {
      container.stations$.first(result => result.size > 0).subscribe(result => {
        fixture.detectChanges();
        // TODO
        done();
      });
    });
    it('should render a forecast after select a station', done => {
      container.stations$
      .first(result => result.size > 0)
      .subscribe(result => {
        fixture.detectChanges();

        const deNgui: DebugElement = deMap.query(By.css('ngui-map'));
        const deStation: DebugElement = deNgui.queryAll(By.css('weather-station-marker'))[0];
        const stationComponent: StationMarkerComponent = deStation.componentInstance;
        stationComponent.onSelectStation();

        fixture.detectChanges();
      });

      container.forecasts$
      .first(result => result.size > 0)
      .subscribe(() => {
        fixture.detectChanges();
        expect(container.hasForecast).to.equal(true);

        const deForecast: DebugElement = de.query(By.css('weather-forecast'));
        expect(deForecast).to.not.equal(null);
        const forecastComponent: ForecastComponent = deForecast.componentInstance;
        expect(forecastComponent.forecasts.size).to.be.gt(0);

        const deForecastDetails: DebugElement[] = deForecast.queryAll(By.css('weather-forecast-detail'));
        expect(deForecastDetails.length).to.be.gt(0);
        const forecastDetailComponent: ForecastDetailComponent = deForecastDetails[0].componentInstance;
        expect(forecastDetailComponent.forecast).to.not.equal(null);

        done();
      });
    });
    it('should render other forecast after select other station', () => {
      // TODO
    });
  });
});