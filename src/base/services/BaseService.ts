import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class BaseService {
  public headers = new Headers();
  public noPreFlightHeaders = new Headers();

  public options = new RequestOptions({
    headers: this.headers,
    withCredentials: true
  });

  public optionsNoPre = new RequestOptions({
    headers: this.noPreFlightHeaders,
    withCredentials: true
  });

  constructor(public http: Http) {
    this.headers.append('Content-Type', 'application/json');
    this.noPreFlightHeaders.append('Content-Type', 'text/plain');
  }

}