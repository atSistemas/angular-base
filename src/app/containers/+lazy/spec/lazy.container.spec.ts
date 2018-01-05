import { TestBed, ComponentFixture, async, getTestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { expect } from 'chai';

import { LazyContainer } from '../lazy.container';
import { LazyActions } from '../actions';

describe('container: lazy', () => {
  let component: LazyContainer;
  let fixture: ComponentFixture<LazyContainer>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyContainer ]
    }).compileComponents();

    fixture = TestBed.createComponent(LazyContainer);
    component = fixture.componentInstance;

    de = fixture.debugElement.query(By.css('p'));
    el = de.nativeElement;

  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  describe('layout', () => {
    it('no messages in the DOM until component is rendered', () => {
      fixture.detectChanges();
      expect(el.textContent).to.equal('');
    });
  });
  
});
