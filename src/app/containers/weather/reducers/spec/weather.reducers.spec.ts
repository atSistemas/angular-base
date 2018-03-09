import { IAction } from 'base'
import { generateMap } from 'base/shared/ModelHelper'
import { expect } from 'chai'
import { Map, Record } from 'immutable'

import { ActionTypes } from '../../actionTypes'
import {
  ForecastModel, IForecast,
  IWeather, StationModel,
  WeatherModel
} from '../../models'
import { WeatherReducer } from '../weather.reducers'

describe('weather reducers', () => {
  let state: Record<IWeather>

  const MockStations = require('mocks/stations.json')
  const MockForecasts = require('mocks/forecast01.json')

  beforeEach(() => {
    state = new WeatherModel()
  })

  it('should return initial state', () => {
    const action: IAction = {
      type: 'undefined'
    }
    expect(WeatherReducer(undefined, action).toObject()).to.deep.equal(state.toObject())
    expect(WeatherReducer(state, action).toObject()).to.deep.equal(state.toObject())
  })

  it('should handle stations request', () => {
    const action: IAction = {
      type: ActionTypes.STATIONS_REQUEST
    }
    expect(WeatherReducer(undefined, action).toObject()).to.deep.equal(state.toObject())
    expect(WeatherReducer(state, action).toObject()).to.deep.equal(state.toObject())
  })

  it('should handle stations success', () => {
    const response = generateMap(MockStations.list, StationModel)
    const action: IAction = {
      payload: { response },
      type: ActionTypes.STATIONS_SUCCESS
    }
    const expectedState = new WeatherModel({
      stations: response
    })
    expect(WeatherReducer(undefined, action).toObject()).to.deep.equal(expectedState.toObject())
    expect(WeatherReducer(state, action).toObject()).to.deep.equal(expectedState.toObject())
  })

  it('should handle stations error', () => {
    const action: IAction = {
      type: ActionTypes.STATIONS_ERROR
    }
    expect(WeatherReducer(undefined, action).toObject()).to.deep.equal(state.toObject())
    expect(WeatherReducer(state, action).toObject()).to.deep.equal(state.toObject())
  })

  it('should handle select station', () => {
    const station = 123
    const action: IAction = {
      payload: { station },
      type: ActionTypes.SELECT_STATION
    }
    const expectedState = new WeatherModel({
      stationSelected: station
    })
    expect(WeatherReducer(undefined, action).toObject()).to.deep.equal(expectedState.toObject())
    expect(WeatherReducer(state, action).toObject()).to.deep.equal(expectedState.toObject())
  })

  it('should handle forecasts request', () => {
    const action: IAction = {
      type: ActionTypes.FORECASTS_REQUEST
    }
    expect(WeatherReducer(undefined, action).toObject()).to.deep.equal(state.toObject())
    expect(WeatherReducer(state, action).toObject()).to.deep.equal(state.toObject())
  })

  it('should handle forecasts success', () => {
    const response = generateMap(MockForecasts.list, ForecastModel)
    const action: IAction = {
      payload: { response },
      type: ActionTypes.FORECASTS_SUCCESS
    }
    const expectedState = new WeatherModel({
      forecasts: response
    })
    expect(WeatherReducer(undefined, action).toObject()).to.deep.equal(expectedState.toObject())
    expect(WeatherReducer(state, action).toObject()).to.deep.equal(expectedState.toObject())
  })

  it('should handle forecasts error', () => {
    const action: IAction = {
      type: ActionTypes.FORECASTS_ERROR
    }
    expect(WeatherReducer(undefined, action).toObject()).to.deep.equal(state.toObject())
    expect(WeatherReducer(state, action).toObject()).to.deep.equal(state.toObject())
  })
})
