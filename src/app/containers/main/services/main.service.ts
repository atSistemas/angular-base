import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';

@Injectable()
export class MainService {
  constructor(private http: Http) {}

  getMain(friends, tags) {
    const setDatas = (data) => {
      data.friends.forEach((friend) => {
        friends.push(friend);
      });

      data.tags.forEach((tag) => {
        tags.push(tag);
      });
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
}
