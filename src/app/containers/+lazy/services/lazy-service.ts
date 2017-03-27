import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { actionTypes } from '../action-types';

@Injectable()
export class LazyService {
  constructor(private http: Http) {}

}
