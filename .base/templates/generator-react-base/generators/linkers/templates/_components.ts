<% components.forEach((component) => { %>import { <%= _.capitalize(_.camelize(component)) %> } from './<%= component %>';<% }) %> 

export {
    <% components.forEach((component, index) => { %> <%= _.capitalize(_.camelize(component)) %><% if(index < components.length - 1) {%>,<% } %><% }) %>
};

export default [
    <% components.forEach((component, index) => { %><%= _.capitalize(_.camelize(component)) %><% if(index < components.length - 1) {%>,<% } %><% }) %> 
]