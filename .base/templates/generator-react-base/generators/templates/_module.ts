import { NgModule } from '@angular/core';
<% if (options.lazy) { %>import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';<% } %>
import { Observable } from 'rxjs/Observable';
import { Action } from 'redux';
import { NgRedux } from 'ng2-redux';

import { AppState, Store, BaseReduxify } from 'base';

import { <%= _.capitalize(name) %>Reducer } from './reducers';
import { <%= _.capitalize(name) %>Container } from './<%= _.dasherize(name) %>';
import { <%= _.capitalize(name) %>Service } from './services';
import { <%= _.capitalize(name) %>Actions } from './actions';

@NgModule({
  declarations: [<%= _.capitalize(name) %>Container],
  providers: [<%= _.capitalize(name) %>Actions, <%= _.capitalize(name) %>Service],
  <% if (options.lazy) { %>imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '<%= _.dasherize(name) %>', component: <%= _.capitalize(name) %>Container }
    ])
  ]<% } %>
})
@BaseReduxify({
  reducers: {
    <%= _.decapitalize(name) %>: <%= _.capitalize(name) %>Reducer
  },
  epics: {
    <%= _.capitalize(name) %>Service: ['query']
  }
})
export default class <%= _.capitalize(name) %>ContainerModule {
  public epics: Observable<Action>[] = [];
  constructor(
    private store: Store,
    private actions: <%= _.capitalize(name) %>Actions,
    private <%= name %>Service: <%= _.capitalize(name) %>Service
  ) { }
}