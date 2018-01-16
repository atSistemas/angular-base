import { TestBed, ComponentFixture, getTestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { StoreModuleImport } from 'base/imports';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { expect } from 'chai';
import { spy } from 'sinon';

import { DisplayComponent } from '../display.component';
import { CalculatorActions } from '../../../actions';

const actions = new CalculatorActions();

describe('Calculator: component: button', () => {
  let component: DisplayComponent;
  let fixture: ComponentFixture<DisplayComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let store: Store<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModuleImport],
      declarations: [DisplayComponent],
      providers: [CalculatorActions]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayComponent);
    fixture.detectChanges();

    component = fixture.componentInstance;
    de = fixture.debugElement;
    el = fixture.nativeElement;

    store = de.injector.get(Store);
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  it('should display "0" initially', async () => {
    const display = de.query(By.css('.classDisplay'));
    expect(display.nativeElement.textContent).to.equal('0');
  });

  it('should change display on number input', async () => {
    const display = de.query(By.css('.classDisplay'));

    store.dispatch(actions.inputNumber(1));
    fixture.detectChanges();
    expect(display.nativeElement.textContent).to.equal('1');

    store.dispatch(actions.inputNumber(2));
    fixture.detectChanges();
    expect(display.nativeElement.textContent).to.equal('12');
  });
});
