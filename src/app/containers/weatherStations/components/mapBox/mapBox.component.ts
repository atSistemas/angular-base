import { Component, ViewChildren, QueryList } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, State } from 'base';
import { WeatherStationActions } from '../../actions';
//import { AgmInfoWindow } from '@agm/core';

@Component({
  selector: 'base-map-box',
  template: '<div>FIXME</div>'
  //templateUrl: './mapBox.component.html',
})

export class MapBoxComponent {
  /*
  //@ViewChildren(AgmInfoWindow) queryList: QueryList<AgmInfoWindow>;
  data$: Observable<any> =  this.store.select(state => state.weatherStation.data);

  lat = 39.938043;
  lng = -4.337157;
  zoom = 6;

  constructor(
    public store: Store<State>,
    public weatherStationActions: WeatherStationActions
  ) {}

  mouseOverMarker(item) {
    this.select(item);
    this.store.dispatch(this.weatherStationActions.weatherStation(item.stationId));
    this.infoWindow.open();
  }

  mouseOutMarker(item) {
    this.infoWindow.close();
  }

  markerClick(item) {
    this.store.dispatch(this.weatherStationActions.weatherStationSelected(item.stationId));
  }

  private select(item) {
    this.infoWindow = this.queryList.find(res =>
      res.latitude === item.coord.Lat && res.longitude === item.coord.Lon);
  }*/
}
