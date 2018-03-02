import { TestBed, ComponentFixture, getTestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { StoreModuleImport } from 'base/imports';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';

import { expect } from 'chai';
import { spy } from 'sinon';

import { ButtonPannelComponent } from '../buttonPannel.component';
import { ButtonComponent } from '../../button/button.component';
import { CalculatorActions } from '../../../actions';

describe('Calculator / Components', () => {
  let component: ButtonPannelComponent;
  let fixture: ComponentFixture<ButtonPannelComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let store: Store<any>;

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

    store = de.injector.get(Store);
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
      it('should emit data value on button number click', (done) => {

        component.onClickNumber.subscribe(value => {
          expect(value).to.equal('1');
          done();
        });

        component.clickNumber('1');

      });
      it('should emit data value on button operation click', (done) => {

        component.onClickOperation.subscribe(value => {
          expect(value).to.equal('CLEAN');
          done();
        });

        component.clickOperation('C');

      });
      it('should emit data value on button operator click', (done) => {

        component.onClickOperator.subscribe(value => {
          expect(value).to.equal('SUM');
          done();
        });

        component.clickOperator('+');

      });
      it('should emit data value on button operator click', (done) => {

        component.onClickDecimal.subscribe(value => {
          expect(value).to.equal(undefined);
          done();
        });

        component.clickDecimal();

      });
      it('should emit data value on button result click', (done) => {

        component.onClickResult.subscribe(value => {
          expect(value).to.equal(undefined);
          done();
        });

        component.clickResult();

      });
    });
  });
});
