import 'base/polyfills';
import 'base/imports/rx';
import { ApplicationRef, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootloader, removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';

import { Store, State } from 'base';
import { AppModule } from './app.module';
import { BaseComponent } from 'base/components/base';

@NgModule({
  bootstrap: [ BaseComponent ],
  imports: [AppModule],
})
export class DevelopmentModule {
  constructor(
    public appRef: ApplicationRef,
    private store: Store<State>,
  ) {}

  hmrOnInit(store) {
    console.log('[BASE] Restoring State...');
    if (!store || !store.rootState) return;
    if (store.rootState) {
      this.store.dispatch(
        { type: 'SET_ROOT_STATE', payload: store.rootState }
      );
    }

    if ('restoreInputValues' in store) { store.restoreInputValues(); };
    this.appRef.tick();
    Object.keys(store).forEach(prop => delete store[prop]);
  }

  hmrOnDestroy(store) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    this.store.take(1).subscribe(s => store.rootState = s);
    store.disposeOldHosts = createNewHosts(cmpLocation);
    store.restoreInputValues  = createInputTransfer();
    removeNgStyles();
  }

  hmrAfterDestroy(store) {
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}

console.log('[BASE] DEVELOPMENT MODE');

export function bootstrapApp() {
  platformBrowserDynamic()
  .bootstrapModule(DevelopmentModule)
  .catch((err) => console.error(err));
}

bootloader(bootstrapApp);