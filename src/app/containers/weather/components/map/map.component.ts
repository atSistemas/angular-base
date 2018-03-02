import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Record, Seq } from 'immutable'
import { IStation } from '../../models/station.model'

@Component({
  selector: 'weather-map',
  styleUrls: [ './map.component.css' ],
  templateUrl: './map.component.html'
})

export class MapComponent {
  @Input() public stations: Seq.Indexed<Record<IStation>>
  @Output() public selectStation = new EventEmitter<Record<IStation>>()
  @Output() public loadMap = new EventEmitter<boolean>()
  public zoom = 6
  private lat = 40.4047789
  private lng = -3.653974

  get center () {
    const { lat, lng } = this
    return { lat , lng }
  }

  public onLoad () {
    this.loadMap.emit(true)
  }

  public onSelectStation (station: Record<IStation>) {
    this.selectStation.emit(station)
  }
}
