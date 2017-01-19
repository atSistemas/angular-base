import { AfterContentInit, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'base-app',
  templateUrl: './index.html',
})
export class BaseComponent {
  constructor(
    public route: ActivatedRoute,
    public router: Router,
  ) { }
};
