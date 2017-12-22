import { TestBed, ComponentFixture, getTestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { TopBarComponent } from './topBar.component';

import { expect } from 'chai';

describe('topBar.component', () => {
  let component: TopBarComponent;
  let fixture: ComponentFixture<TopBarComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TopBarComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(TopBarComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    el = fixture.nativeElement;
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  it('should be ok', () => {
    expect(true).to.equal(true);
  });
});
