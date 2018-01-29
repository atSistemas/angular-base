import { expect } from 'chai';

import { HumidityPipe } from '../humidity.pipe';
import { PressurePipe } from '../pressure.pipe';
import { TemperaturePipe } from '../temperature.pipe';

describe('weather pipes', () => {
  let humidityPipe: HumidityPipe;
  let pressurePipe: PressurePipe;
  let temperaturePipe: TemperaturePipe;

  const mock = 123;

  beforeEach(() => {
    humidityPipe = new HumidityPipe();
    pressurePipe = new PressurePipe();
    temperaturePipe = new TemperaturePipe();
  });

  it('humidity pipe should add "%" at the end of the value', () => {
    expect(humidityPipe.transform(mock)).to.equal('123 %');
  });

  it('pressure pipe should add "hpa" at the end of the value', () => {
    expect(pressurePipe.transform(mock)).to.equal('123 hpa');
  });

  it('temperature pipe should add "°C" at the end of the value', () => {
    expect(temperaturePipe.transform(mock)).to.equal('123 °C');
  });
});