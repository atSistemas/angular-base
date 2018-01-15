import { Record, Map } from 'immutable';
import { expect } from 'chai';

import {
  Weather, WeatherModel,
  Forecast, ForecastModel,
  StationModel
} from '../../models';
import { Action } from '../../../../../base';
import { ActionTypes } from '../../actionTypes';
import { WeatherReducer } from '../weather.reducers';
import { generateMap } from '../../../../../base/shared/ModelHelper';

describe('weather reducers', () => {
  let state: Record<Weather>;

  const MockStations = require('../../../../../../server/api/mocks/stations.json');
  const MockForecasts = require('../../../../../../server/api/mocks/forecast01.json');

  beforeEach(() => {
    state = new WeatherModel();
  });

  it('should return initial state', () => {
    const action: Action = {
      type: 'undefined'
    };
    expect(WeatherReducer(undefined, action).toObject()).to.deep.equal(state.toObject());
    expect(WeatherReducer(state, action).toObject()).to.deep.equal(state.toObject());
  });

  it('should handle stations request', () => {
    const action: Action = {
      type: ActionTypes.STATIONS_REQUEST
    };
    expect(WeatherReducer(undefined, action).toObject()).to.deep.equal(state.toObject());
    expect(WeatherReducer(state, action).toObject()).to.deep.equal(state.toObject());
  });

  it('should handle stations success', () => {
    const response = generateMap(MockStations.list, StationModel);
    const action: Action = {
      type: ActionTypes.STATIONS_SUCCESS,
      payload: { response }
    };
    const expectedState = new WeatherModel({
      stations: response
    });
    expect(WeatherReducer(undefined, action).toObject()).to.deep.equal(expectedState.toObject());
    expect(WeatherReducer(state, action).toObject()).to.deep.equal(expectedState.toObject());
  });

  it('should handle stations error', () => {
    const action: Action = {
      type: ActionTypes.STATIONS_ERROR
    };
    expect(WeatherReducer(undefined, action).toObject()).to.deep.equal(state.toObject());
    expect(WeatherReducer(state, action).toObject()).to.deep.equal(state.toObject());
  });

  it('should handle select station', () => {
    const station = 123;
    const action: Action = {
      type: ActionTypes.SELECT_STATION,
      payload: { station }
    };
    const expectedState = new WeatherModel({
      stationSelected: station
    });
    expect(WeatherReducer(undefined, action).toObject()).to.deep.equal(expectedState.toObject());
    expect(WeatherReducer(state, action).toObject()).to.deep.equal(expectedState.toObject());
  });

  it('should handle forecasts request', () => {
    const action: Action = {
      type: ActionTypes.FORECASTS_REQUEST
    };
    expect(WeatherReducer(undefined, action).toObject()).to.deep.equal(state.toObject());
    expect(WeatherReducer(state, action).toObject()).to.deep.equal(state.toObject());
  });

  it('should handle forecasts success', () => {
    const response = generateMap(MockForecasts.list, ForecastModel);
    const action: Action = {
      type: ActionTypes.FORECASTS_SUCCESS,
      payload: { response }
    };
    const expectedState = new WeatherModel({
      forecasts: response
    });
    expect(WeatherReducer(undefined, action).toObject()).to.deep.equal(expectedState.toObject());
    expect(WeatherReducer(state, action).toObject()).to.deep.equal(expectedState.toObject());
  });

  it('should handle forecasts error', () => {
    const action: Action = {
      type: ActionTypes.FORECASTS_ERROR
    };
    expect(WeatherReducer(undefined, action).toObject()).to.deep.equal(state.toObject());
    expect(WeatherReducer(state, action).toObject()).to.deep.equal(state.toObject());
  });
});