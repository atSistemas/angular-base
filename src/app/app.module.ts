import { ApplicationRef, NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { IState, Store } from 'base'
import { BaseImports } from 'base/imports'
import { BaseProviders } from 'base/providers'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TopBarComponent } from './components'
import { CalculatorModule } from './containers/calculator/calculator.module'
/* Module Containers */
import { HomeModule } from './containers/home/home.module'
import { WeatherModule } from './containers/weather/weather.module'

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
  constructor (
    public appRef: ApplicationRef,
    private store: Store<IState>
  ) {}
}
