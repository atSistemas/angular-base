import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';

@Injectable()
export class MainService2 {
  constructor(private http: Http) {}

  getMain(): Promise<any> {
    return this.http
      .get('mocks/people.json')
      .toPromise()
      .then((res) => res.json())
      .catch((res) => res.json());
  }
}
