import { getTestBed, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { expect } from 'chai';
import { spy } from 'sinon';
import { MainContainer } from '../main.component';

describe('MainContainer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainContainer]
    });
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  it('should display "Main Container"', () => {
    const fixture = TestBed.createComponent(MainContainer);
    fixture.detectChanges();

    const h1 = fixture.debugElement.query(By.css('h1'));

    expect(h1.nativeElement.textContent).to.equal('Main Container');
  });

});
