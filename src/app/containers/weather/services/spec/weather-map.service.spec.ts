import { TestBed, inject } from '@angular/core/testing';
import { fakeServer, SinonFakeServer } from 'sinon';
import { Observable } from 'rxjs/Observable';
import { HttpModule } from '@angular/http';
import { expect } from 'chai';

import { WeatherMapService } from '../weather-map.service';
import { StationModel, ForecastModel } from '../../models';
import { fakeResponse } from '../../../../../base/shared/Utils';
import { generateMap } from '../../../../../base/shared/ModelHelper';
import { OWM_API_FORECAST, OWM_API_STATION } from '../../config/open-weather-map.config';

describe('weather services', () => {
  let service: WeatherMapService;
  let server: SinonFakeServer;

  const MockStations = require('../../../../../../server/api/mocks/stations.json');
  const MockForecasts = require('../../../../../../server/api/mocks/forecast01.json');
  const lat = 1;
  const lon = 1;

  beforeEach(() => {
    server = fakeServer.create();
    server.respondWith(
      'GET',
      OWM_API_STATION(),
      fakeResponse(200, MockStations)
    );
    server.respondWith(
      'GET',
      OWM_API_FORECAST(lat, lon),
      fakeResponse(200, MockForecasts)
    );
    server.respondImmediately = true;
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [
        WeatherMapService
      ]
    });
  });

  beforeEach(inject([WeatherMapService], (weatherMapService: WeatherMapService) => {
    service = weatherMapService;
  }));

  afterEach(() => {
    TestBed.resetTestingModule();
    server.restore();
  });

  it('getStations should be a stations observable and having a Map Immutable response', done => {
    const MockStationMap = generateMap(MockStations.list, StationModel);
    service.getStations()
    .subscribe(result => {
      expect(result).to.deep.equal(MockStationMap);
      done();
    });
  });

  it('getForecast should be a forecasts observable and having a Map Immutable response', done => {
    const MockForecastsMap = generateMap(MockForecasts.list, ForecastModel);
    const getForecast = service.getForecast(lat, lon);
    expect(getForecast).to.be.instanceof(Observable);

    getForecast.subscribe(result => {
      expect(result).to.deep.equal(MockForecastsMap);
      done();
    });
  });
});