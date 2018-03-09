
import { CommonModule, Location } from '@angular/common'
import { Component, DebugElement, Input } from '@angular/core'
import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'

import { NguiMapModule } from '@ngui/map'

import { expect } from 'chai'
import { spy } from 'sinon'

import { textSpanContainsTextSpan } from 'typescript'
import { MainModel as StationMainModel } from '../../../models'
import { HumidityPipe, PressurePipe, TemperaturePipe } from '../../../pipes'
import { StationInfoComponent } from '../station-info.component'

const GoogleMapsModule = NguiMapModule.forRoot({
  apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyAGzFY_wPUFAkPgEeHw0zXgMZxP5p4sj64'
})

@Component({
  selector: 'mocked-component',
  template:
  `<ngui-map
    class="ngui-map"
    [fullscreenControl]="false"
    [mapTypeControl]="false"
    [streetViewControl]="false"
  >
    <weather-station-info
      [id]="infoWindowID"
      [info]="info"
    ></weather-station-info>
  </ngui-map>`
})
class MockComponent {
  @Input() public infoWindowID = 'test-id'
  @Input() public info = new StationMainModel({
    humidity: 77,
    pressure: 0.25,
    temp: 38
  })
}

describe('Weather', () => {
  describe('component: station-info', () => {
    let component: MockComponent
    let fixture: ComponentFixture<MockComponent>
    let de: DebugElement
    let el: HTMLElement

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [
          MockComponent,
          StationInfoComponent,
          HumidityPipe, PressurePipe, TemperaturePipe
        ],
        imports: [CommonModule, GoogleMapsModule]
      }).compileComponents()

      fixture = TestBed.createComponent(MockComponent)
      component = fixture.componentInstance
      de = fixture.debugElement.query(By.css('weather-station-info'))
      el = de.nativeElement

      fixture.detectChanges()
    })

    afterEach(() => {
      getTestBed().resetTestingModule()
    })

    it('should render 38 °C temperature', async () => {
      const temp = de.query(By.css('.content.temperature b')).nativeElement.textContent
      expect(temp).to.equal('38 °C')
    })

    it('should render 77 % humidity', async () => {
      const temp = de.query(By.css('.content.humidity b')).nativeElement.textContent
      expect(temp).to.equal('77 %')
    })

    it('should render 0.25 hpa pressure', async () => {
      const temp = de.query(By.css('.content.pressure b')).nativeElement.textContent
      expect(temp).to.equal('0.25 hpa')
    })
  })
})
