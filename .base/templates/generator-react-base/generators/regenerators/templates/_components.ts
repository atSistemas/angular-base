<% references.forEach((reference) => { %>
export { <%= _.capitalize(_.camelize(reference)) %> } from './<%= reference %>';
<% } %> 