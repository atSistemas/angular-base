import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { Store, State } from 'base';
import { WeatherStationActions } from './actions';
import { WeatherStationsCollection } from './models';

@Component({
  selector: 'base-weatherStation-container',
  templateUrl: './weatherStation.container.html',
  styleUrls: ['./weatherStation.container.css']
})

export class WeatherStationContainer implements OnInit {
  public data$: Observable<WeatherStationsCollection>; 
  
  // private name: string;
  // names = ['Mr. IQ', ' f  ', '  Bombasto  '];
  

  constructor(
    public store: Store<State>,
    public weatherStationActions: WeatherStationActions
  ) { }

  ngOnInit() {
    this.data$ = this.store.select(state => state.weatherStation);
    //this.store.dispatch(this.weatherStationActions.mainRequest());
    this.store.dispatch(this.weatherStationActions.weatherStations());
    // this.store.dispatch(this.weatherStationActions.weather(40.4165000, -3.7025600));
  
  }

}


// import Immutable from 'immutable';
// import { connect } from 'react-redux';
// import { PropTypes } from 'prop-types';
// import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import shouldPureComponentUpdate from 'react-pure-render/function';

// import { fetchRequiredActions } from 'base';
// import * as Actions from './actions';
// import MapBox from './components/MapBox';
// import ForecastDetail from './components/ForecastDetail';
// import WeatherStationDetails from './components/WeatherStationDetails';
// import styles from './styles.css';

// export class WeatherStations extends Component {

//   static propTypes = {
//     dispatch: PropTypes.func.isRequired,
//     WeatherStationsModel: PropTypes.instanceOf(Immutable.Record).isRequired,
//     WeatherStationDetailsState: PropTypes.instanceOf(Immutable.Map).isRequired,
//     StationSelected: PropTypes.number.isRequired
//   };

//   static requiredActions = [Actions.getWeatherStations];

//   constructor (props) {
//     super(props);
//     this.actions = bindActionCreators(Actions, props.dispatch);
//   }

//   componentDidMount() {
//     const force = this.props['WeatherStationsModel'].get('data').size === 0;
//     fetchRequiredActions(WeatherStations.requiredActions, this.props, 'WeatherStationsModel', force);
//   }

//   shouldComponentUpdate = shouldPureComponentUpdate;

//   render () {
//     let props = this.props.WeatherStationsModel;
//     const WeatherStationDetailsState = this.props.WeatherStationDetailsState;
//     const stationList = WeatherStationDetailsState.valueSeq().map( station => {

//       return (<WeatherStationDetails
//         key={ station.id }
//         selected={ this.props.StationSelected }
//         details={ station }
//       />);

//     });

//     props.name = 'WeatherStations';
//     return (
//       <div className={ styles.WeatherStations  }>
//         <MapBox name={ props.name } />
//         { stationList }
//         <div className={ styles.clear } />
//         <div>
//           <ForecastDetail />
//         </div>
//       </div>
//     );
//   }

// }

// export default connect(
//   (state) => ({
//     WeatherStationsModel: state.WeatherStations,
//     WeatherStationDetailsState:state.WeatherStations.weatherStationDetails,
//     StationSelected: state.WeatherStations.stationSelected
//   })
// )(WeatherStations);
