import '../../../../base/imports/rx';

import { StoreModule } from '@ngrx/store';
import { getTestBed, TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { expect } from 'chai';
import { spy } from 'sinon';

import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { MainContainer } from '../main.component';
import { AppComponents } from '../../../app.components';
import { BaseImports } from '../../../../base/imports/';
import { BaseProviders } from '../../../../base/providers/';


describe('MainContainer', () => {

  let comp: MainContainer;
  let fixture: ComponentFixture<MainContainer>;
  let server : any;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
          BaseImports,
          StoreModule.provideStore({}),
          HttpModule,
          BrowserModule
        ],
      declarations: [AppComponents, MainContainer],
      providers: [BaseProviders]
    });
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  it('should display "Main Container"', () => {
    /*const fixture = TestBed.createComponent(MainContainer);
    const h1 = fixture.debugElement.query(By.css('h1'));
    expect(h1.nativeElement.textContent).to.equal('Main Container');

    fixture.detectChanges();*/
});

});
