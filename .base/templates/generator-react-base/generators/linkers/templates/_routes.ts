import { Routes } from '@angular/router';
<% routes.forEach((route, index) => { if(!route.lazy) {%>
import { <%= _.capitalize(_.camelize(route.path)) %>Container } from '../containers/<%= route.path %>';
<% }}) %>

export const AppRoutingProviders: any[] = [

];

export const routes: Routes = [
  <% routes.forEach((route, index) => { %>
  {
    path: <% if(!route.home) { %>'<%= route.path %>'<% } else { %>''<% } %>,
    pathMatch: 'full',
    <% if(route.lazy) { %>loadChildren: () => System.import('../containers/+<%= route.path %>')
    <% } else { %>component: <%= _.capitalize(_.camelize(route.path)) %>Container<% } %>
  }<% if(index < routes.length - 1) {%>,<% } %>
<% }) %>
];