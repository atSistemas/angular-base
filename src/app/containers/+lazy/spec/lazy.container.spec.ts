import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { expect } from 'chai';

import { StoreModuleImport } from '../../../../base/imports';

import { LazyContainer } from '../lazy.container';
import { LazyActions } from '../actions';

describe('container: lazy', () => {
  let component: LazyContainer;
  let fixture: ComponentFixture<LazyContainer>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ StoreModuleImport ],
      declarations: [ LazyContainer ],
      providers: [ LazyActions ]
    }).compileComponents();

    fixture = TestBed.createComponent(LazyContainer);

    component = fixture.componentInstance;

    de = fixture.debugElement;
    el = fixture.nativeElement;
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  describe('layout', () => {
    it('should render "Lazy Container"', () => {
      fixture.detectChanges();
      expect(el.querySelector('p').textContent).to.equal('Lazily loaded Container!');
    });
  });
});
