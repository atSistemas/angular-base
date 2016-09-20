import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: '<%= _.dasherize(name) %>',
  templateUrl: './<%= _.dasherize(name) %>.html'
})
export class <%= _.capitalize(name) %>Component {
  @Input() <%= name %>: <%= _.capitalize(name) %>ModelInterface;
}
