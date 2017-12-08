import { Component, OnInit } from '@angular/core';
import { Store, State } from 'base';
import { selectStationSelected } from './selectors';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'base-weather-container',
  templateUrl: './weather.container.html',
  styleUrls: ['./weather.container.css']
})

export class WeatherContainer implements OnInit{
  stationSelected$: Observable<number>;

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.stationSelected$ = this.store.select(state => (
      selectStationSelected(state.weather)
    ));
  }

}