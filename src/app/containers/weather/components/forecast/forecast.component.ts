import { Component, Input, OnInit } from '@angular/core'
import { Map, Record, Seq } from 'immutable'
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'

import { IForecast } from '../../models/forecast.model'
import { selectForecasts } from '../../selectors'

@Component({
  selector: 'weather-forecast',
  styleUrls: [ './forecast.component.scss' ],
  templateUrl: './forecast.component.html'
})

export class ForecastComponent {
  @Input() public forecasts: Seq.Indexed<Record<IForecast>>
}
