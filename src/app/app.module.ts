import './styles/styles.css';

import { ToastyModule } from 'ng2-toasty';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BaseService } from './shared/services/base.service';
import { AccountModule } from './containers/account/account.module';
import { TranslateLoader, TranslateModule, TranslateStaticLoader } from 'ng2-translate/ng2-translate';

import { Store, State } from 'base';
import { BaseImports } from 'base/imports/';
import { BaseProviders } from 'base/providers/';
import { AppComponents } from './app.components';
import { AppComponent } from './app.component';

export function translateLoaderFactory(http: Http) {
  return new TranslateStaticLoader(http, 'https://dev-estimate.einsanet.es/api/i18n', '.json');
}


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    AppComponents,
  ],
  imports: [
    BaseImports,
    BrowserModule,
    HttpModule,
    AccountModule,
    ToastyModule.forRoot(),
    TranslateModule.forRoot(
      {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
        deps: [Http]
      })
  ],
  providers: [
    BaseProviders,
    BaseService
  ],
})
export class AppModule {
  constructor(
    public appRef: ApplicationRef,
    private store: Store<State>,
  ) {
    console.log('APP MODULE CONSTRUCTOR');
  }

}
