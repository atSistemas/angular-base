import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LazyService {
  constructor(private http: Http) {}
}