import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Store, State } from 'base';
import { Map, Record, Seq } from 'immutable';

import { Forecast } from '../../models/forecast.model';
import { selectForecasts } from '../../selectors';

@Component({
  selector: 'weather-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: [ './forecast.component.css' ]
})

export class ForecastComponent {
  @Input() forecasts: Seq.Indexed<Record<Forecast>>;
}