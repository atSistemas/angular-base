import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Record, Seq } from 'immutable';
import { Station } from '../../models/StationModel';

@Component({
  selector: 'weather-map',
  templateUrl: './map.component.html',
  styleUrls: [ './map.component.css' ]
})

export class MapComponent {
  @Input() stations: Seq.Indexed<Record<Station>>;
  @Output() selectStation = new EventEmitter<Record<Station>>();
  zoom = 6;
  private lat = 40.4047789;
  private lng = -3.653974;

  get center() {
    const { lat, lng } = this;
    return { lat , lng };
  }

  onSelectStation(station: Record<Station>) {
    this.selectStation.emit(station);
  }
}