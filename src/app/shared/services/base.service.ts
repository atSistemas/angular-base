import { Router } from '@angular/router';
import { Injectable, Injector } from '@angular/core';
import { Headers, Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
// import * as EnvData from './../config/envdata';

import { Observable } from 'rxjs/Observable';

// import { MessagesService } from './../shared/services/messages.service';

export enum ServiceException {
  GENERAL_ERROR = 1,
  UNAUTHORIZED = 2
}

export type Params = { [index: string]: string | number };

@Injectable()
export class BaseService {

  constructor(
    private http: Http,
    // private messageService: MessagesService,
    private injector: Injector) { }

  public get router(): Router { //this creates router property on your service.
    return this.injector.get(Router);
  }

  configureRequest(contentType: string) {
    const headers = { Authorization: `Bearer ${this.token}` };
    Object.assign(headers, contentType ?
      { 'Content-Type': contentType }
      :
      { 'Content-Type': 'application/json', 'responseType': 'arraybuffer' });
    return new Headers(headers);
  }

  configureParams(params: Params) {

    const uRLSearchParams = new URLSearchParams();

    if (!params) return uRLSearchParams;

    for (const index in params) {
      if (index) {
        uRLSearchParams.set(index, params[index].toString());
      }
    }
    return uRLSearchParams;
  }

  configureRequestOptions(params: {}, contentType = null) {
    return new RequestOptions({
      headers: this.configureRequest(contentType),
      search: this.configureParams(params)
    });
  }

  login(url: string, body: any, contentType = null) {
    /*return this.http.post(
        EnvData.serverUrl + url,
        body,
        this.configureRequestOptions({}, contentType)
    ).map(this.getData).catch(this.dealErrors);*/
  }


  post(url: string, body: any, contentType = null) {
    // return this.http.post(
    //     EnvData.serverUrl + url,
    //     body,
    //     this.configureRequestOptions({}, contentType)
    // ).map(this.getData).catch(this.dealErrors);
  }

  get(url: string, params: Params = {}, contentType = null) {
    // return this.http.get(
    //     EnvData.serverUrl + 'api/' + url,
    //     this.configureRequestOptions(params, contentType)
    // ).catch(this.dealErrors).map(this.getData);
  }

  /**
   * Función para el tratamiento de errores
   */
  dealErrors = (error) => {
    if (typeof error === 'object' && error.status === 401) {
      localStorage.removeItem('access_token');
      this.router.navigate(['account', 'login']);
      return Observable.throw(ServiceException.UNAUTHORIZED, error._body);
    } else {
      return Observable.throw(ServiceException.GENERAL_ERROR, error._body);
    }
  }

  /**
   * función para obtener los datos json de la respuesta http
   */
  getData = (response: Response) => {
    let jsonResponse;
    try {
      jsonResponse = response.json();
    } catch (e) {
      // comment
    }
    /*if (jsonResponse && jsonResponse.Success !== undefined && !jsonResponse.Success) {
        this.messageService.showAlert(jsonResponse.Message.Type, jsonResponse.Message.Text, '');
        throw Observable.throw(ServiceException.GENERAL_ERROR); // error._body FIX
    }*/
    if (jsonResponse && jsonResponse.success !== undefined && !jsonResponse.success) {
      //this.messageService.
      // showAlert(jsonResponse.message.type, jsonResponse.message.text, '');
      throw Observable.throw(ServiceException.GENERAL_ERROR); // error._body FIX
    }

    return jsonResponse || response;
  }

  get token() {
    return localStorage.getItem('access_token');
  }

}
