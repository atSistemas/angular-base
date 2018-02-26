import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Record } from 'immutable';
import { Store, State } from 'base';

import { Station, Main } from '../../models/station.model';
import { WeatherActions } from '../../actions/weather.actions';

@Component({
  selector: 'weather-station-marker',
  templateUrl: './station-marker.component.html',
  styleUrls: [ './station-marker.component.scss' ]
})

export class StationMarkerComponent {
  @Input() stationSelected: number;
  @Input() station: Record<Station>;
  @Input() index: number;

  @Output() selectStation = new EventEmitter<Record<Station>>();

  get position() {
    return {
      lat: this.station.getIn(['coord', 'Lat']),
      lng: this.station.getIn(['coord', 'Lon'])
    };
  }

  get infoWindowID() {
    return `iw-${ this.index }`;
  }

  get info() {
    return this.station.getIn(['main']);
  }

  onSelectStation() {
    this.selectStation.emit(this.station);
  }

  showInfoWindow({ target: marker }) {
    marker.nguiMapComponent.openInfoWindow(this.infoWindowID, marker);
  }

  hideInfoWindow({ target: marker }) {
    marker.nguiMapComponent.closeInfoWindow(this.infoWindowID);
  }
}