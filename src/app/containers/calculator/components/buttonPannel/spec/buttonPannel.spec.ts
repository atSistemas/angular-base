import { TestBed, ComponentFixture, getTestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { Location } from '@angular/common';
import { By } from '@angular/platform-browser';
import { Store } from '@ngrx/store';

import { expect } from 'chai';
import { spy } from 'sinon';

import { StoreModuleImport } from '../../../../../../base/imports';

import { ButtonPannelComponent } from '../buttonPannel.component';
import { ButtonComponent } from '../../button/button.component';
import { CalculatorActions } from '../../../actions';

describe('Calculator / Components', () => {
  let component: ButtonPannelComponent;
  let fixture: ComponentFixture<ButtonPannelComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let _store: Store<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModuleImport],
      declarations: [ButtonPannelComponent, ButtonComponent],
      providers: [CalculatorActions]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonPannelComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    el = fixture.nativeElement;

    _store = de.injector.get(Store);
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  describe('Calculator: component: buttonPannel', () => {
    describe('layout', () => {
      it('should have 19 buttons', () => {
        expect(el.querySelectorAll('button')).to.have.lengthOf(19);
      });
    });

    describe('behaviour', () => {
      it('should dispatch an action on button click', () => {
        const spyDispatch = spy(_store, 'dispatch');
        const buttons = de.queryAll(By.css('button'));
        buttons.forEach(button => {
          button.triggerEventHandler('click', {});
          expect(spyDispatch.called).to.equal(true);
          spyDispatch.reset();
        });
      });
    });
  });
});
