import '../../../../base/imports/rx';

import { StoreModule } from '@ngrx/store';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { getTestBed, TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { expect } from 'chai';

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
    }).compileComponents();
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  it('should display "Main Container"', () => {

    fixture = TestBed.createComponent(MainContainer);
    let title : any;

    title = fixture.debugElement.query(By.css('h2'));
    expect(title.nativeElement.textContent).to.equal('');

    fixture.detectChanges();

    title = fixture.debugElement.query(By.css('h2'));
});

});
