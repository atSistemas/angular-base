import { Routes } from '@angular/router';
import { MainContainer } from '../containers';

export const AppRoutingProviders: any[] = [

];

export const routes: Routes = [
  <% routes.forEach((route) => { %>
  {
    path: <%= route.path %>,
    pathMatch: 'full',
    <% if(route.lazy) { %>
      loadChildren: () => System.import('../containers/+<%= route.path %>'),
    <% } else { %>
      component: <%= _.capitalize(_.camelize(route.path)) %>Container
    <% } %>
  }
<% }) %>
];