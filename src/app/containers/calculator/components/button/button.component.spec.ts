import { TestBed, ComponentFixture, getTestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { Location } from '@angular/common';
import { By } from '@angular/platform-browser';

import { expect } from 'chai';
import { spy } from 'sinon';

import { ButtonComponent } from './button.component';

describe('Calculator: component: button', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    el = fixture.nativeElement;
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  describe('layout', () => {
    it('should only have a button', () => {
      expect(de.children.length).to.equal(1);
      expect(de.children[0].name).to.equal('button');
    });
  });

  describe('behaviour', () => {
    describe('layout', () => {
      it('should display the value in model', () => {
        fixture.autoDetectChanges();
        component.value = '2';
        expect(fixture.nativeElement.querySelector('button').innerText).to.equal('2');
      });
    });

    it('should call onClick method when button is clicked', () => {
      fixture.autoDetectChanges();
      const spyfn = spy(component, 'onClick');
      de.children[0].nativeElement.click();
      expect(spyfn.called).to.equal(true);
    });
  });
});
