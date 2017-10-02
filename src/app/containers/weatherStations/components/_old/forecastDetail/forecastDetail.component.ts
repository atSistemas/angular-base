// import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import { WeatherStationActions } from '../../actions';
// import { WeatherStationsCollection } from '../../models';
// import { Store, State } from 'base';

// @Component({
//   selector: 'base-forecast-detail',
//   templateUrl: './forecastDetail.component.html',
//   styleUrls:['./forecastDetail.component.css']
// })

// export class ForecastDetailComponent implements OnInit {
//   public data$: Observable<WeatherStationsCollection>;
//   constructor(
//      public store: Store<State>,
//       public weatherStationActions: WeatherStationActions
//   ){ 
//   this.data$ = this.store.select(state => state.weatherStation);
//   this.store.dispatch(this.weatherStationActions.weather(40.4165000, -3.7025600));  
//   }

//   ngOnInit() { }
// }










// import { connect } from 'react-redux';
// import React, { Component } from 'react';
// import { PropTypes } from 'prop-types';
// import ForecastDetailItem from '../ForecastDetailItem';
// import styles from './styles.css';

// export class ForecastDetail extends Component {

//   static propTypes = {
//     Forecast: PropTypes.object.isRequired,
//     StationSelected: PropTypes.number.isRequired
//   };

//   constructor (props) {
//     super(props);
//   }

//   render () {
//     let Forecast = this.props.Forecast;
//     if (this.props.StationSelected === -1 ) {
//       return (
//         <div />
//       );
//     }

//     let index = 0;

//     const forecastList = Forecast.valueSeq().map( weather => {
//       index++;
//       return (<ForecastDetailItem key={ index } item={ weather } /> );
//     });

//     return (
//       <div>
//         <h3 className={ styles.title }> FORECAST </h3>
//         { forecastList }
//       </div>
//     );

//   }}

// export default connect(
//   (state) => ({
//     Forecast: state.WeatherStations.forecast,
//     StationSelected: state.WeatherStations.stationSelected
//   })
// )(ForecastDetail);
