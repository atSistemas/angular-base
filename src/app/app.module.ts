import { HttpModule } from '@angular/http';
import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { Store, State } from 'base';
import { BaseImports } from 'base/imports/';
import { BaseProviders } from 'base/providers/';

import { MainModule } from './containers/main/main.module';
import { CalculatorModule } from './containers/calculator/calculator.module';
import { WeatherModule } from './containers/weather/weather.module';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/topBar/topBar.component';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    TopBarComponent
  ],
  imports: [
    BaseImports,
    BrowserModule,
    HttpModule,
    MainModule,
    CalculatorModule,
    WeatherModule,
    RouterModule
  ],
  providers: [ BaseProviders ]
})

export class AppModule {
  constructor(
    public appRef: ApplicationRef,
    private store: Store<State>
  ) {}

}
