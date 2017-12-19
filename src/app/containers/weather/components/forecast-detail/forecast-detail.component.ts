import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Record } from 'immutable';

import { Forecast, Temp } from '../../models';

@Component({
  selector: 'weather-forecast-detail',
  templateUrl: './forecast-detail.component.html',
  styleUrls: [ './forecast-detail.component.css' ]
})

export class ForecastDetailComponent {
  @Input() forecast: Record<Forecast>;

  get dateTime(): Date {
    return new Date(this.forecast.getIn(['dt']) * 1000);
  }

  get day(): number {
    return this.forecast.getIn(['temp', 'day']);
  }

  get min(): number {
    return this.forecast.getIn(['temp', 'min']);
  }

  get max(): number {
    return this.forecast.getIn(['temp', 'max']);
  }

  get night(): number {
    return this.forecast.getIn(['temp', 'night']);
  }

  get eve(): number {
    return this.forecast.getIn(['temp', 'eve']);
  }

  get morn(): number {
    return this.forecast.getIn(['temp', 'morn']);
  }
}