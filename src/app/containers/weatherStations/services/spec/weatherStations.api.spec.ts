import { expect } from 'chai';
import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule, Http, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { WeatherStationService } from '../weatherStationService';
// import { Observable   } from 'rxjs/Observable';
// import 'rxjs/Rx';  

// import { List, Map, Record } from 'immutable'

describe('WeatherStationService', () => {
  
  // let service: WeatherStationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      // declarations: [WeatherStationService],
      providers: [
        WeatherStationService,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });
  });

  // beforeEach(inject([WeatherStationService], (_weatherStationService: WeatherStationService) => {
  //   service = _weatherStationService;
  // }));


  // describe('WeatherStationService check object', ()=>{

  //   //  it('should be an object', () => {
  //   //   expect(service).to.be.an('object');
  //   // });

  //   it('should be an object',
  //     inject([WeatherStationService], (weatherStationService) => {
  //         expect(weatherStationService).to.be.an('object');
  //     })
  //   );
  // });

  describe('weatherStations()', () => {
    
    it('should return an Observable<List<any>>', () => {
      let prueba;
      inject([WeatherStationService, XHRBackend], (weatherStationService, mockBackend) => {
       
        const mockResponse = {
          data: [
            { id: 0, name: 'Video 0' },
            { id: 1, name: 'Video 1' },
            { id: 2, name: 'Video 2' },
            { id: 3, name: 'Video 3' },
          ]
        };

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });

       
        let data;
        
        weatherStationService.weatherStations1().subscribe(
              result,
              error, 
              completed
          );
        

          var result = (result) =>{  
            console.log('Next: ' + result);
            data = result;
            prueba = data;
           
            return result;
           
          }
          var error = (error) =>{
           
            console.log('Error: ' + error);
          }

            var completed = () =>{
            
                console.log('Completed');;
            }
          // console.log('resultObservable', resultObservable) 
        // expect(data).to.be.an('qobject');  

        //resultObservable.unsubscribe();
      });
      //  console.log('resultObservable', prueba)
    });

  })

});


// describe('WeatherStationService', () => {

//   describe('weatherStations()', ()=>{
//     it('should return an Observable<List<any>>', () => {
//       inject([WeatherStationService], (weatherStationService) => {
//         weatherStationService.weatherStations().subscribe((s) => {
//           expect(weatherStationService).to.be.an('qobject');
//           expect(s.count).to.have.lengthOf(3);
//           console.log('count', s.count);
//           // console.log('service', service)
//           // expect(service[0].name).to.equal('Video 0');
//         });
//       });
//     });
//   })

// });


// describe('SharedService', () => {
//     let service: WeatherStationService;

//     beforeEach(() => {
//         service = new WeatherStationService();
//     })

//     it('should be an object', () => {
//         expect(service).to.be.an('object');
//     })
// });





// import { expect } from 'chai';
// import * as helpers from '../../helpers';
// import weatherStationMock from 'mocks/weatherStation.json';


// describe('Actions', () => {
//   describe('WeatherStations action', () => {

//     it('Should return weatherStation ', () => {
//       let obj = {
//         "last": {
//           "dt": 1467917065
//         },
//         "params": [],
//         "station": {
//           "coord": {
//               "lat": 41.761,
//               "lon": -2.4588
//           },
//           "id": 10912,
//           "name": "ED1ZAI-1",
//           "status": 30,
//           "type": 2
//           }
//         };

//       const returnedData = helpers.getDataWeatherStation(obj);

//       expect(returnedData[0].id).to.equal(obj.station.id );

//     });

//   });
// });