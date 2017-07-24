import { expect } from 'chai';
import { WeatherStationDetailsComponent } from '../weatherStationDetails.component';
import { DatePipe } from '@angular/common'

describe('Testing in WeatherStationDetailsComponent', () => {
  let subject: WeatherStationDetailsComponent;

  beforeEach(() => {
    subject = new WeatherStationDetailsComponent();
  });

  it('should calculate Win Direction', () => {
    const expectedWinDirection = 'SSW';
    const wind = { deg: 210, speed: 3.6 };
   
    expect(subject.calculateWinDirection(wind)).to.equal(expectedWinDirection);
  });

  it('should calculate date', () => {
    const expectedDate = '16/07/2017';
    const dt = 1500220940;
    let result = new DatePipe('es').transform(subject.calculateDate(dt), 'dd/MM/yyyy');
    expect(result).to.equal(expectedDate);
  });
});

