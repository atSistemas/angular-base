import { TestBed, ComponentFixture, async, getTestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Store } from '@ngrx/store';

import { expect } from 'chai';

import { MockStore } from '../../../../base/store/mock-store';

import { LazyContainer } from '../lazy.container';
import { LazyActions } from '../actions';

describe('container: lazy', () => {
  let component: LazyContainer;
  let fixture: ComponentFixture<LazyContainer>;
  let de: DebugElement;
  let el: HTMLElement;

  let _store: Store<any>;
  let _lazyActions: LazyActions;

  beforeEach(() => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      declarations: [ LazyContainer ],
      providers: [
        LazyActions,
        {
          provide: Store,
          useValue: new MockStore({lazy: {message: 'Lazy Container'}})
        }
       ]
    }).compileComponents();

    fixture = TestBed.createComponent(LazyContainer);

    _store = fixture.debugElement.injector.get(Store);
    _lazyActions = fixture.debugElement.injector.get(LazyActions);

    component = fixture.componentInstance;

    de = fixture.debugElement;
    el = fixture.nativeElement;
  });

  describe('layout', () => {
    it('should render "Lazy Container"', () => {
      fixture.detectChanges();
      expect(el.querySelector('p').textContent).to.equal('Lazy Container');
    });
  });

});
