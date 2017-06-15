// import 'base/imports/rx';

// import { StoreModule } from '@ngrx/store';
// import { HttpModule } from '@angular/http';
// import { BrowserModule } from '@angular/platform-browser';
// import { getTestBed, TestBed, ComponentFixture } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';

// import { expect } from 'chai';

// import { MainContainer } from '../main.component';
// import { AppComponent } from '../../../app.component';
// import { BaseProviders } from '../../../../base/providers/';


// describe('MainContainer', () => {

//   let comp: MainContainer;
//   let fixture: ComponentFixture<MainContainer>;

//   beforeEach(() => {

//     TestBed.configureTestingModule({
//       imports: [
//         StoreModule.provideStore({}),
//         HttpModule,
//         BrowserModule
//       ],
//       declarations: [AppComponent, MainContainer],
//       providers: [BaseProviders]
//     }).compileComponents();
//   });

//   afterEach(() => {
//     getTestBed().resetTestingModule();
//   });

//   it('should display "Main Container"', () => {
//     const fixture = TestBed.createComponent(MainContainer);
//     const h1 = fixture.debugElement.query(By.css('h1'));
//     expect(h1.nativeElement.textContent).to.equal('Main Container');
//     fixture.detectChanges();
// });

// });