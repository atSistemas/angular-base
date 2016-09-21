<% components.forEach((component) => { %>
export { <%= _.capitalize(_.camelize(component)) %> } from './<%= component %>';
<% }) %> 