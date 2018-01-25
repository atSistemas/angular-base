import { HttpModule } from '@angular/http';
import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Store, State } from 'base';
import { BaseImports } from 'base/imports';
import { BaseProviders } from 'base/providers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components';
/* Module Containers */
import { HomeModule } from './containers/home/home.module';
import { CalculatorModule } from './containers/calculator/calculator.module';
import { WeatherModule } from './containers/weather/weather.module';

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
    HomeModule,
    CalculatorModule,
    WeatherModule,
    AppRoutingModule
  ],
  providers: [ BaseProviders ]
})

export class AppModule {
  constructor(
    public appRef: ApplicationRef,
    private store: Store<State>
  ) {}

}
