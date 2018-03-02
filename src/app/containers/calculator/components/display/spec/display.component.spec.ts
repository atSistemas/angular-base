import { TestBed, ComponentFixture, getTestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { StoreModuleImport } from 'base/imports';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { expect } from 'chai';
import { spy } from 'sinon';

import { DisplayComponent } from '../display.component';

describe('Calculator: component: button', () => {
  let component: DisplayComponent;
  let fixture: ComponentFixture<DisplayComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModuleImport],
      declarations: [DisplayComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayComponent);
    fixture.detectChanges();

    component = fixture.componentInstance;
    component.display = '0';
    fixture.detectChanges();

    de = fixture.debugElement;
    el = fixture.nativeElement;
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  it('should display "0" initially', async () => {
    const display = de.query(By.css('.classDisplay'));
    expect(display.nativeElement.textContent).to.equal('0');
  });

});
