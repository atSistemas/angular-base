import { TestBed, ComponentFixture, getTestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { Location } from '@angular/common';
import { By } from '@angular/platform-browser';

import { expect } from 'chai';

import { Record } from 'immutable';
import { generateMap } from '../../../../../../base/shared/ModelHelper';

import { ForecastDetailComponent } from '../forecast-detail.component';
import { ForecastModel, TempModel } from '../../../models';
import { HumidityPipe } from '../../../pipes/humidity.pipe';
import { PressurePipe } from '../../../pipes/pressure.pipe';
import { TemperaturePipe } from '../../../pipes/temperature.pipe';

describe('Weather', () => {
  describe('component: forecast-detail', () => {
    const forecast = new ForecastModel({
      dt: new Date(2018, 9, 20).getTime() / 1000,
      temp: new TempModel({
        day: 39,
        min: 20,
        max: 41,
        night: 22,
        eve: 38,
        morn: 34,
      }),
    });

    let component: ForecastDetailComponent;
    let fixture: ComponentFixture<ForecastDetailComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [ForecastDetailComponent, HumidityPipe, PressurePipe, TemperaturePipe],
      }).compileComponents();

      fixture = TestBed.createComponent(ForecastDetailComponent);
      component = fixture.componentInstance;
      de = fixture.debugElement;
      el = fixture.nativeElement;

      component.forecast = forecast;
      fixture.detectChanges();
    });

    afterEach(() => {
      getTestBed().resetTestingModule();
    });

    const getTextContent = element => element.textContent.trim().replace('\n', '');

    describe('Weather: component: forecast-detail', () => {
      it('should render "20/10/2018" as date', async () => {
        await fixture.whenStable();

        const title = de.query(By.css('.title')).nativeElement;
        const date = getTextContent(title);
        expect(date).to.equal('20/10/2018');
      });

      it('should render "39 °C" as day temperature', async () => {
        await fixture.whenStable();

        const forecastDay = de.query(By.css('.forecast-temp.day b')).nativeElement;
        const temp = getTextContent(forecastDay);
        expect(temp).to.equal('39 °C');
      });

      it('should render "20 °C" as min temperature', async () => {
        await fixture.whenStable();

        const forecastDay = de.query(By.css('.forecast-temp.min b')).nativeElement;
        const temp = getTextContent(forecastDay);
        expect(temp).to.equal('20 °C');
      });

      it('should render "41 °C" as max temperature', async () => {
        await fixture.whenStable();

        const forecastDay = de.query(By.css('.forecast-temp.max b')).nativeElement;
        const temp = getTextContent(forecastDay);
        expect(temp).to.equal('41 °C');
      });

      it('should render "22 °C" as night temperature', async () => {
        await fixture.whenStable();

        const forecastDay = de.query(By.css('.forecast-temp.night b')).nativeElement;
        const temp = getTextContent(forecastDay);
        expect(temp).to.equal('22 °C');
      });

      it('should render "38 °C" as evening temperature', async () => {
        await fixture.whenStable();

        const forecastDay = de.query(By.css('.forecast-temp.eve b')).nativeElement;
        const temp = getTextContent(forecastDay);
        expect(temp).to.equal('38 °C');
      });

      it('should render "34 °C" as morning temperature', async () => {
        await fixture.whenStable();

        const forecastDay = de.query(By.css('.forecast-temp.morn b')).nativeElement;
        const temp = getTextContent(forecastDay);
        expect(temp).to.equal('34 °C');
      });
    });
  });
});
