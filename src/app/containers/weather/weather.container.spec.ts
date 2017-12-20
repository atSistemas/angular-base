import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Record, Map } from 'immutable';

import { Station, Forecast } from './models';
import { WeatherMapService } from './services';
import { WeatherContainer } from './weather.container';
import { expect } from 'chai';

describe('WeatherContainer', () => {

  let comp: WeatherContainer;
  let fixture: ComponentFixture<WeatherContainer>;
  let componentWeatherMapService: WeatherMapService;
  let weatherMapService: WeatherMapService;
  let de: DebugElement;
  let el: HTMLElement;

  let weatherMapServiceStub: {
    getStations(): Observable<Map<number, Record<Station>>>;
    getForecast(lat: number, lon: number): Observable<Map<number, Record<Forecast>>>;
  }

  beforeEach(() => {

    weatherMapServiceStub = {
      getStations() {
        return of(Map<number, Record<Station>>());
      },
      getForecast(lat: number, lon: number) {
        return of(Map<number, Record<Forecast>>());
      }
    };

    TestBed.configureTestingModule({
      declarations: [ WeatherContainer ],
      providers: [
        {
          provide: WeatherMapService,
          useValue: weatherMapServiceStub
        }
      ]
    });

    fixture = TestBed.createComponent(WeatherContainer);
    comp = fixture.componentInstance;

    weatherMapService = fixture.debugElement.injector.get(WeatherMapService);
    componentWeatherMapService = weatherMapService;

    weatherMapService = TestBed.get(WeatherMapService);

    de = fixture.debugElement.query(By.css('weather-map'));
    el = de.nativeElement;
  });

  it('should render a empty map', () => {
    fixture.detectChanges();
    const content = el;
  })

})