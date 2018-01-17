
import { TestBed, ComponentFixture, getTestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { generateMap } from 'base/shared/ModelHelper';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';

import { NguiMapModule } from '@ngui/map';

import { expect } from 'chai';
import { spy } from 'sinon';

import { MapComponent } from '../map.component';
import { StationMarkerComponent } from '../../station-marker/station-marker.component';
import { StationInfoComponent } from '../../station-info/station-info.component';
import { HumidityPipe, PressurePipe, TemperaturePipe } from '../../../pipes';
import { ForecastModel, StationModel, Station } from '../../../models';

const GoogleMapsModule = NguiMapModule.forRoot({
  apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyAGzFY_wPUFAkPgEeHw0zXgMZxP5p4sj64'
});

describe('Calculator / Components', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MapComponent,
        StationMarkerComponent,
        StationInfoComponent,
        HumidityPipe, PressurePipe, TemperaturePipe],
      imports: [
        GoogleMapsModule
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    el = fixture.nativeElement;

    component.stations = generateMap([{}, {}], StationModel).toIndexedSeq();

    fixture.detectChanges();
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  describe('Weather: component: forecast', () => {
    it('should render 2 markers', async () => {
      await fixture.whenStable();
      expect(de.queryAll(By.css('marker'))).to.have.lengthOf(2);
    });

    it('should render 2 station info', async () => {
      await fixture.whenStable();
      expect(de.queryAll(By.css('weather-station-info'))).to.have.lengthOf(2);
    });

    it('should emit an station on select marker', async () => {
      const mockStation = new StationModel();
      const selectMarkerSpy = spy(component, 'onSelectStation');
      component.onSelectStation(mockStation);
      expect(selectMarkerSpy.calledWith(mockStation)).to.equal(true);
    });

    it('"center" should return object with default coordinates', () => {
      const defaultCoords = {
        lat: 40.4047789,
        lng: -3.653974,
      };

      expect(component.center).to.deep.equal(defaultCoords);
    });
  });
});
