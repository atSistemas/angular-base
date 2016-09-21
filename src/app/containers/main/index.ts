import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { select } from 'ng2-redux';
import { MainActions } from './actions';
import { MainService } from './services';

export { MainDisplay } from './components';

@Component({
  selector: 'main-container',
  providers: [MainActions, MainService],
  templateUrl: './main.html'
})

export class MainContainer implements OnInit{
  @select() main$:Observable<any[]>
  //@select(state=>state.main) main:Observable<any>
  //@select(['main','main']) main$;


  constructor(
    private actions: MainActions,
    private service: MainService
  ) {}

  ngOnInit(): void {
    this.actions.mainRequest();
  }
}
