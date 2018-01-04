import { Component, Input } from '@angular/core';
import { Record } from 'immutable';
import { Main } from '../../models/station.model';

@Component({
  selector: 'weather-station-info',
  templateUrl: './station-info.component.html',
  styleUrls: [ './station-info.component.css' ]
})

export class StationInfoComponent {
  @Input() id: string;
  @Input() info: Record<Main>;

  get temperature() {
    return this.info.getIn(['temp']);
  }

  get pressure() {
    return this.info.getIn(['pressure']);
  }

  get humidity() {
    return this.info.getIn(['humidity']);
  }
}