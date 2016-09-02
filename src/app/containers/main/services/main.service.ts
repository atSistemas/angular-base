import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { NgRedux } from 'ng2-redux';
import { Observable } from 'rxjs';
import { actionTypes } from '../action-types';


@Injectable()
export class MainService {
  constructor(
    private ngRedux: NgRedux<AppState>,
    private http: Http
  ) {
    this.dispatch = this.ngRedux.dispatch;
  }

  getMain(friends, tags) {

    this.dispatch({ type: actionTypes.MAIN_REQUEST }));

    const setDatas = (data) => {
      data.friends.forEach((friend) => {
        friends.push(friend);
      });

      data.tags.forEach((tag) => {
        tags.push(tag);
      });

      console.log(44444);
      this.dispatch({ type: actionTypes.MAIN_SUCCESS, payload: data  }))
    }

    const thenPromise = (res) => {
      res
      .json()
      .forEach((data) => {
        setDatas(data);
      });
    }

    this.http
    .get('mocks/main.json')
    .toPromise()
    .then(thenPromise)
    .catch((res) => console.log(res));
}
