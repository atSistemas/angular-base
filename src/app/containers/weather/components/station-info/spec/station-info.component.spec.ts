
import { TestBed, ComponentFixture, getTestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Input } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

import { NguiMapModule } from '@ngui/map';

import { expect } from 'chai';
import { spy } from 'sinon';

import { StationInfoComponent } from '../station-info.component';
import { HumidityPipe, PressurePipe, TemperaturePipe } from '../../../pipes';
import { MainModel as StationMainModel } from '../../../models';
import { textSpanContainsTextSpan } from 'typescript';

const GoogleMapsModule = NguiMapModule.forRoot({
  apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyAGzFY_wPUFAkPgEeHw0zXgMZxP5p4sj64'
});

@Component({
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
  </ngui-map>`,
  selector: 'mocked-component'
})
class MockComponent {
  @Input() infoWindowID = 'test-id';
  @Input() info = new StationMainModel({
    temp: 38,
    humidity: 77,
    pressure: 0.25,
  });
}

describe('Calculator / Components', () => {
  let component: MockComponent;
  let fixture: ComponentFixture<MockComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MockComponent,
        StationInfoComponent,
        HumidityPipe, PressurePipe, TemperaturePipe
      ],
      imports: [CommonModule, GoogleMapsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MockComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('weather-station-info'));
    el = de.nativeElement;

    fixture.detectChanges();
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  describe('Weather: component: station-info', () => {
    it('should render 38 °C temperature', async () => {
      // console.log('outer', el.outerHTML);
      const temp = de.query(By.css('.content.temperature b')).nativeElement.textContent;
      expect(temp).to.equal('38 °C');
    });

    it('should render 77 % humidity', async () => {
      // console.log('outer', el.outerHTML);
      const temp = de.query(By.css('.content.humidity b')).nativeElement.textContent;
      expect(temp).to.equal('77 %');
    });

    it('should render 0.25 hpa pressure', async () => {
      // console.log('outer', el.outerHTML);
      const temp = de.query(By.css('.content.pressure b')).nativeElement.textContent;
      expect(temp).to.equal('0.25 hpa');
    });
  });
});
