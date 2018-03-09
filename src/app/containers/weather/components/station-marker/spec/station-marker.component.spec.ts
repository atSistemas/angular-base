import { Location } from '@angular/common'
import { Component, DebugElement, ViewEncapsulation } from '@angular/core'
import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { generateMap } from 'base/shared/ModelHelper'
import { Observable } from 'rxjs/Observable'

import { NguiMapModule } from '@ngui/map'

import { expect } from 'chai'
import { spy } from 'sinon'

import { CoordModel, MainModel, StationModel } from '../../../models'
import { HumidityPipe, PressurePipe, TemperaturePipe } from '../../../pipes'
import { StationInfoComponent } from '../../station-info/station-info.component'
import { StationMarkerComponent } from '../station-marker.component'

export const GoogleMapsModule = NguiMapModule.forRoot({
  apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyAGzFY_wPUFAkPgEeHw0zXgMZxP5p4sj64'
})

const mockMarker = {
  nguiMapComponent: {
    closeInfoWindow: () => void 0,
    openInfoWindow: () => void 0
  }
}

@Component({
  selector: 'mocked-component',
  template:
  `<ngui-map
    class="ngui-map"
    [fullscreenControl]="false"
    [mapTypeControl]="false"
    [streetViewControl]="false"
  >
      <weather-station-marker
        [station]="station"
        [index]="index"
      ></weather-station-marker>
  </ngui-map>`
})
class MockComponent {
  private index = 123

  private station = new StationModel({
    coord: new CoordModel({
      Lat: 2.5,
      Lon: 1.5
    }),
    id: -1,
    main: new MainModel({
      humidity: 0,
      pressure: 0,
      temp: 0
    })
  })
}

describe('Weather: component: station-marker', () => {
  let component: StationMarkerComponent
  let fixture: ComponentFixture<MockComponent>
  let de: DebugElement
  let el: HTMLElement

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MockComponent,
        StationMarkerComponent,
        StationInfoComponent,
        HumidityPipe, PressurePipe, TemperaturePipe
      ],
      imports: [
        GoogleMapsModule
      ]
    }).compileComponents()

    fixture = TestBed.createComponent(MockComponent)
    de = fixture.debugElement.query(By.css('weather-station-marker'))
    el = de.nativeElement
    component = de.componentInstance

    fixture.detectChanges()
  })

  afterEach(() => {
    getTestBed().resetTestingModule()
  })

  describe('Weather: component: forecast', () => {
    it('should call showInfoWindow on mouse over', () => {
      const marker = de.query(By.css('marker'))
      const spyOn = spy(component, 'showInfoWindow')
      expect(spyOn.called).to.equal(false)
      marker.triggerEventHandler('mouseover', { target: mockMarker })
      expect(spyOn.called).to.equal(true)
    })

    it('should call hideInfoWindow on mouse over', () => {
      const marker = de.query(By.css('marker'))
      const spyOn = spy(component, 'hideInfoWindow')
      expect(spyOn.called).to.equal(false)
      marker.triggerEventHandler('mouseout', { target: mockMarker })
      expect(spyOn.called).to.equal(true)
    })

    it('should call onSelectStation on click event', () => {
      const marker = de.query(By.css('marker'))
      const spyOn = spy(component, 'onSelectStation')
      expect(spyOn.called).to.equal(false)
      marker.triggerEventHandler('click', {})
      expect(spyOn.called).to.equal(true)
    })

    it('should return correct coordinates', () => {
      const expectedCoords = {
        lat: 2.5,
        lng: 1.5
      }
      expect(component.position).to.deep.equal(expectedCoords)
    })

    it('should return correct value on property infoWindowID', () => {
      expect(component.infoWindowID).to.equal('iw-123')
    })

    it('should return MainModel instance in "info" property', () => {
      expect(component.info).to.be.instanceOf(MainModel)
    })
  })
})
