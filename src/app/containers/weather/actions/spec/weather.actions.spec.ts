import { inject, TestBed } from '@angular/core/testing'
import { HttpModule } from '@angular/http'
import { IAction } from 'base'
import { RequestEffect } from 'base/effects'
import { EffectsModuleImport, StoreModuleImport } from 'base/imports'
import { expect } from 'chai'

import { ActionTypes } from '../../actionTypes'
import { WeatherMapService } from '../../services'
import { WeatherActions } from '../weather.actions'

describe('weather actions', () => {
  let actions: WeatherActions

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [
        WeatherActions,
        WeatherMapService
      ]
    })
  })

  beforeEach(inject([WeatherActions], (weatherActions: WeatherActions) => {
    actions = weatherActions
  }))

  afterEach(() => {
    TestBed.resetTestingModule()
  })

  it('should create an action to set a new station selected', () => {
    const station = 123
    const realAction = actions.selectStation(station)
    const expectedAction: IAction = {
      payload: { station },
      type: ActionTypes.SELECT_STATION
    }
    expect(realAction.type).to.equal(expectedAction.type)
    expect(realAction.payload).to.deep.equal(expectedAction.payload)
  })

  it('should create an action to get stations with a request as Observable', () => {
    const realAction = actions.getStations()
    const expectedAction: IAction = {
      request: actions.weatherMapService.getStations(),
      type: ActionTypes.STATIONS_REQUEST
    }
    const requestObject = expectedAction.request.constructor
    expect(realAction.type).to.equal(expectedAction.type)
    expect(realAction.request).to.be.an.instanceOf(requestObject)
  })

  it('should create an action to get forecasts with a request as Observable', () => {
    const lat = 123
    const lon = 123
    const realAction = actions.getForecast(lat, lon)
    const expectedAction: IAction = {
      request: actions.weatherMapService.getForecast(lat, lon),
      type: ActionTypes.FORECASTS_REQUEST
    }
    const requestObject = expectedAction.request.constructor
    expect(realAction.type).to.equal(expectedAction.type)
    expect(realAction.request).to.be.an.instanceOf(requestObject)
  })
})
