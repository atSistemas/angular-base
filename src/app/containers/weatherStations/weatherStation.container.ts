import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { Store, State } from 'base';
import { WeatherStationActions } from './actions';
import { WeatherStationsCollection } from './models';

@Component({
  selector: 'base-weatherStation-container',
  templateUrl: './weatherStation.container.html',
  styleUrls: ['./weatherStation.container.css']
})

export class WeatherStationContainer implements OnInit {
  public data$: Observable<WeatherStationsCollection>; 
  
  // private name: string;
  // names = ['Mr. IQ', ' f  ', '  Bombasto  '];
  

  constructor(
    public store: Store<State>,
    public weatherStationActions: WeatherStationActions
  ) { }

  ngOnInit() {
    this.data$ = this.store.select(state => state.weatherStation);
    //this.store.dispatch(this.weatherStationActions.mainRequest());
    this.store.dispatch(this.weatherStationActions.weatherStations());
    // this.store.dispatch(this.weatherStationActions.weather(40.4165000, -3.7025600));
  
  }

}


