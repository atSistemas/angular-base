import { Component, EventEmitter, Input, Output } from '@angular/core'
import { IState, Store } from 'base'
import { Record } from 'immutable'

import { WeatherActions } from '../../actions/weather.actions'
import { IStation } from '../../models/station.model'

@Component({
  selector: 'weather-station-marker',
  styleUrls: [ './station-marker.component.css' ],
  templateUrl: './station-marker.component.html'
})

export class StationMarkerComponent {
  @Input() public stationSelected: number
  @Input() public station: Record<IStation>
  @Input() public index: number

  @Output() public selectStation = new EventEmitter<Record<IStation>>()

  get position () {
    return {
      lat: this.station.getIn(['coord', 'Lat']),
      lng: this.station.getIn(['coord', 'Lon'])
    }
  }

  get infoWindowID () {
    return `iw-${ this.index }`
  }

  get info () {
    return this.station.getIn(['main'])
  }

  public onSelectStation () {
    this.selectStation.emit(this.station)
  }

  public showInfoWindow ({ target: marker }) {
    marker.nguiMapComponent.openInfoWindow(this.infoWindowID, marker)
  }

  public hideInfoWindow ({ target: marker }) {
    marker.nguiMapComponent.closeInfoWindow(this.infoWindowID)
  }
}
