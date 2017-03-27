import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PayloadAction } from 'base';
import { AppState } from 'base/store';
import { ActionTypes } from '../action-types';
import { BaseService } from 'base/shared/BaseService';

@Injectable()
export class MainService extends BaseService {
  constructor(public http: Http) {
    super(http);
  }

  public getData(): Observable<string> {
    return this.http.get('mocks/basic.json', this.optionsNoPre)
      .map(res => res.json());
  }
}
