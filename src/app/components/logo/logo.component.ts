import { Component, Input } from '@angular/core';
// import { Observable } from 'rxjs/Observable';

// import { Store, State } from 'base';
// import { MainModel } from '../../models';

@Component({
  selector: 'logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
})

export class LogoComponent {
 
  @Input() src: string;
  @Input() location: string;
  @Input() width: number;
  @Input() alt: string;
  
  constructor() {
    // this.src = "assets/images/react-base-logo.png";
    // this.width = 500;

  }

  //   public data$: Observable<MainModel>;

  //   constructor(public store: Store<State>) {
  //     this.data$ = this.store.select(state => state.main);
  //   }

}