import { expect } from 'chai';
import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';

import { MapBox } from '../';
import weatherStationsMock from 'mocks/weatherStations.json';
import { WeatherStationsModel, setInitialState } from '../../../models';


function setup() {

  function dispatch() { }
  let initialState = {
    WeatherStations: {
      data: weatherStationsMock,
      StationSelected: 15,
      forecast: {},
      weatherStationDetails: {}
    }
  };
  let initialStateProps = setInitialState(initialState);

  let props = {
    dispatch: dispatch,
    Stations: initialStateProps.data,
    StationSelected: initialStateProps.stationSelected
  };

  let renderer = new ReactShallowRenderer();
  renderer.render(<MapBox {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('component ', () => {
  describe('MapBox', () => {
    it('should render correctly', () => {
      const { output } = setup();
      expect(output.type).to.equal('div');
    });

    it('should click function return valur', () => {
      const key = 23333;

      const childProps = {
        lat: 2222,
        lng: 2222,
        stationId: 22
      }
      const { output } = setup();
      const func = output.props.children.props;

      const keyOutput = func.onChildClick(key, childProps);

      expect(keyOutput).to.equal(23333);

    });
  });
});