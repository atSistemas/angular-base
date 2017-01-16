import { AfterContentInit, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'base-app',
  templateUrl:'./base.html'
})
export class BaseComponent {

  constructor(
    public route: ActivatedRoute,
    public router: Router
  ) { }
};
