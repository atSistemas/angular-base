import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { select } from 'ng2-redux';

import { <%= _.capitalize(name) %>Service } from './services';
import { <%= _.capitalize(name) %>Actions } from './actions';

@Component({
  selector: '<%= _.dasherize(name) %>-container',
  providers: [<%= _.capitalize(name) %>Actions, <%= _.capitalize(name) %>Service],
  templateUrl: './<%= _.dasherize(name) %>.html'
})

export class <%= _.capitalize(name) %>Container implements OnInit {
  @select() <%= _.decapitalize(name) %>$:Observable<any[]>

  constructor(
    private actions: <%= _.capitalize(name) %>Actions,
    private service: <%= _.capitalize(name) %>Service
  ) {}

  ngOnInit(): void {
    this.actions.query();
  }
}
