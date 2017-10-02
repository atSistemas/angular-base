import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { WeatherStationDetailsModel,  WeatherStationDetails } from './../../models';

@Component({
  selector: 'base-weather-station-details',
  templateUrl: 'weatherStationDetails.component.html',
  styleUrls: ['weatherStationDetails.component.css']
})

export class WeatherStationDetailsComponent implements OnInit {
  @Input() details: WeatherStationDetails;
    
  constructor() {}

  ngOnInit() {}

  public calculateWinDirection(wind: any): string {
    if (!wind) return "";

    const windDirections = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    const windDirectionDegrees = parseInt(((wind.deg / 22.5) + 0.5).toString());
    const windDirection = windDirections[windDirectionDegrees % 16];

    return windDirection;
  }

  public calculateDate(date){
   return  new Date(date*1000);
  }
}