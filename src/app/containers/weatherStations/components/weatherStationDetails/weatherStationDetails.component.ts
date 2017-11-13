import { Component, Input } from '@angular/core';
import { WeatherStationDetails } from './../../models';

@Component({
  selector: 'base-weather-station-details',
  templateUrl: 'weatherStationDetails.component.html',
  styleUrls: ['weatherStationDetails.component.css']
})

export class WeatherStationDetailsComponent {
  @Input() details: WeatherStationDetails;

  public calculateWinDirection(wind: any): string {
    if (!wind) return '';

    const windDirections = [
      'N',
      'NNE',
      'NE',
      'ENE',
      'E',
      'ESE',
      'SE',
      'SSE',
      'S',
      'SSW',
      'SW',
      'WSW',
      'W',
      'WNW',
      'NW',
      'NNW'
    ];
    const windDirectionDegrees = (wind.deg / 22.5) + 0.5;
    const windDirection = windDirections[windDirectionDegrees % 16];

    return windDirection;
  }

  public calculateDate(date) {
    return  new Date(date * 1000);
  }
}