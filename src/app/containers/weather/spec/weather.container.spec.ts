import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { NguiMapModule } from '@ngui/map';
import { expect } from 'chai';
import 'rxjs/add/operator/map';

import { StoreModuleImport } from '../../../../base/imports';
import { WeatherActions } from '../actions/weather.actions';
import { WeatherContainer } from '../weather.container';
import { GoogleMapsModule } from '../weather.module';
import * as WeatherComponents from '../components';
import { WeatherMapService } from '../services';
import * as WeatherPipes from '../pipes';

describe('container: weather', () => {
  let component: WeatherContainer;
  let fixture: ComponentFixture<WeatherContainer>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModuleImport,
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
        WeatherMapService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherContainer);
    fixture.detectChanges();

    component = fixture.componentInstance;

    de = fixture.debugElement;
    el = de.nativeElement;
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  describe('layout', () => {
    it('should render 230 station markers', fakeAsync(() => {
      fixture.detectChanges();
      tick(2000);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const elMap = el.querySelector('weather-map').firstElementChild;
        expect(elMap.childElementCount - 1).to.equal(230);
      });
    }));
    /*
    it('should not render any forecast', () => {
    });
    */
  });

  /*
  describe('behaviour', () => {
    it('should render a station info after hover a station', () => {
    });
    it('should render a forecast after select a station', () => {
    });
    it('should render other forecast after select other station', () => {
    });
  });
  */
});