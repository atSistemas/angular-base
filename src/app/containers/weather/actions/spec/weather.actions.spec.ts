import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { expect } from 'chai';

import { Action } from '../../../../../base';
import { ActionTypes } from '../../actionTypes';
import { WeatherActions } from '../weather.actions';
import { RequestEffect } from '../../../../../base/effects';
import { EffectsModuleImport, StoreModuleImport } from '../../../../../base/imports';
import { WeatherMapService } from '../../services';
import { Observable } from 'rxjs/Observable';

describe('weather actions', () => {
  let actions: WeatherActions;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [
        WeatherActions,
        WeatherMapService
      ]
    });
  });

  beforeEach(inject([WeatherActions], (weatherActions: WeatherActions) => {
    actions = weatherActions;
  }));

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('should create an action to set a new station selected', () => {
    const station = 123;
    const realAction = actions.selectStation(station);
    const expectedAction: Action = {
      type: ActionTypes.SELECT_STATION,
      payload: { station }
    };
    expect(realAction.type).to.equal(expectedAction.type);
    expect(realAction.payload).to.deep.equal(expectedAction.payload);
  });

  it('should create an action to get stations with a request as Observable', () => {
    const realAction = actions.getStations();
    const expectedAction: Action = {
      type: ActionTypes.STATIONS_REQUEST,
      request: actions.weatherMapService.getStations()
    };
    const requestObject = expectedAction.request.constructor;
    expect(realAction.type).to.equal(expectedAction.type);
    expect(realAction.request).to.be.an.instanceOf(requestObject);
  });

  it('should create an action to get forecasts with a request as Observable', () => {
    const lat = 123;
    const lon = 123;
    const realAction = actions.getForecast(lat, lon);
    const expectedAction: Action = {
      type: ActionTypes.FORECASTS_REQUEST,
      request: actions.weatherMapService.getForecast(lat, lon)
    };
    const requestObject = expectedAction.request.constructor;
    expect(realAction.type).to.equal(expectedAction.type);
    expect(realAction.request).to.be.an.instanceOf(requestObject);
  });
});