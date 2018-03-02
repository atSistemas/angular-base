import { Component, Input, OnInit } from '@angular/core'
import { Record } from 'immutable'
import { Observable } from 'rxjs/Observable'

import { IForecast } from '../../models/forecast.model'

@Component({
  selector: 'weather-forecast-detail',
  styleUrls: [ './forecast-detail.component.css' ],
  templateUrl: './forecast-detail.component.html'
})

export class ForecastDetailComponent {
  @Input() public forecast: Record<IForecast>

  get dateTime (): Date {
    return new Date(this.forecast.getIn(['dt']) * 1000)
  }

  get day (): number {
    return this.forecast.getIn(['temp', 'day'])
  }

  get min (): number {
    return this.forecast.getIn(['temp', 'min'])
  }

  get max (): number {
    return this.forecast.getIn(['temp', 'max'])
  }

  get night (): number {
    return this.forecast.getIn(['temp', 'night'])
  }

  get eve (): number {
    return this.forecast.getIn(['temp', 'eve'])
  }

  get morn (): number {
    return this.forecast.getIn(['temp', 'morn'])
  }
}
