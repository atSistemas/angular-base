import { Component, ViewEncapsulation } from '@angular/core';
//import { CultureService } from 'shared/services';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'base-app',
  templateUrl: './app.component.html'
})

export class AppComponent {
  constructor( ) { }
};


// import { WelcomeComponent } from 'base/components/welcome';

// export const AppComponents = [
//   WelcomeComponent
// ];