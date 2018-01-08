import { TestBed, ComponentFixture, async, getTestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { expect } from 'chai';

import { storeModuleImport } from '../../../../base/imports';

import { LazyContainer } from '../lazy.container';
import { LazyActions } from '../actions';

describe('container: lazy', () => {
  let component: LazyContainer;
  let fixture: ComponentFixture<LazyContainer>;
  let de: DebugElement;
  let el: HTMLElement;
  let _lazyActions: LazyActions;

  beforeEach(() => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      imports: [storeModuleImport],
      declarations: [ LazyContainer ],
      providers: [LazyActions]
    }).compileComponents();

    fixture = TestBed.createComponent(LazyContainer);

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
