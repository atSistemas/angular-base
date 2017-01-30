import 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { PayloadAction } from '../../../../base/';
import { AppState } from '../../../../base/store';
import { actionTypes } from '../action-types';
@Injectable()
export class LazyService {
  constructor(private http: Http) {}

  public getData() {
    // 
  }
}
