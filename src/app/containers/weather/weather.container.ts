import { Component, OnDestroy, OnInit } from '@angular/core'
import { IState, Store } from 'base'
import { Map, Record, Seq } from 'immutable'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'

import { WeatherActions } from './actions/weather.actions'
import { IForecast } from './models/forecast.model'
import { IStation } from './models/station.model'
import { WeatherMapService } from './services'

import {
  selectForecasts,
  selectStations
} from './selectors'

@Component({
  selector: 'base-weather-container',
  styleUrls: ['./weather.container.css'],
  templateUrl: './weather.container.html'
})

export class WeatherContainer implements OnInit, OnDestroy {
  public stations$: Observable<Map<number, Record<IStation>>> = this.store.select(selectStations)
  public stationsSubscription: Subscription
  public stations: Map<number, Record<IStation>> = Map<number, Record<IStation>>()

  public forecasts$: Observable<Map<number, Record<IForecast>>> = this.store.select(selectForecasts)
  public forecastsSubscription: Subscription
  public forecasts: Map<number, Record<IForecast>> = Map<number, Record<IForecast>>()

  public isLoaded$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  public isLoadedSubscription: Subscription
  public isLoaded = false

  constructor (
    private store: Store<IState>,
    private weatherActions: WeatherActions
  ) { }

  public ngOnInit () {
    this.stationsSubscription = this.stations$.first((result) => result.size > 0)
      .subscribe((stations) => (
        this.stations = stations
      ))
    this.forecastsSubscription = this.forecasts$.subscribe((forecasts) => (
      this.forecasts = forecasts
    ))
    this.isLoadedSubscription = this.isLoaded$.first((result) => result)
      .subscribe((isLoaded) => (
        this.isLoaded = isLoaded
      ))
    this.getStations()
  }

  public ngOnDestroy () {
    this.forecastsSubscription.unsubscribe()
  }

  get stationList (): Seq.Indexed<Record<IStation>> {
    return this.stations.valueSeq()
  }

  get forecastList (): Seq.Indexed<Record<IForecast>> {
    return this.forecasts.valueSeq()
  }

  get hasForecast (): boolean {
    return this.forecasts.size > 0
  }

  public onSelectStation (station: Record<IStation>) {
    const id = station.getIn(['id'])
    const lat = station.getIn(['coord', 'Lat'])
    const lon = station.getIn(['coord', 'Lon'])
    this.store.dispatch(
      this.weatherActions.selectStation(id)
    )
    this.store.dispatch(
      this.weatherActions.getForecast(lat, lon)
    )
  }

  public onLoad (isLoaded: boolean) {
    this.isLoaded$.next(isLoaded)
  }

  public getStations () {
    if (!this.stations.count()) {
      this.store.dispatch(this.weatherActions.getStations())
    }
  }

}
