import { Component, Input } from '@angular/core'
import { Record } from 'immutable'

import { IMain } from '../../models/station.model'

@Component({
  selector: 'weather-station-info',
  styleUrls: [ './station-info.component.scss' ],
  templateUrl: './station-info.component.html'
})

export class StationInfoComponent {
  @Input() public id: string
  @Input() public info: Record<IMain>

  get temperature () {
    return this.info.getIn(['temp'])
  }

  get pressure () {
    return this.info.getIn(['pressure'])
  }

  get humidity () {
    return this.info.getIn(['humidity'])
  }
}
