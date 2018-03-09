import { ApplicationRef, NgModule } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { bootloader, createInputTransfer, createNewHosts, removeNgStyles } from '@angularclass/hmr'
import 'base/conf/polyfills'
import 'base/conf/rx'

import { IState, Store } from 'base'
import { AppComponent } from './app.component'
import { AppModule } from './app.module'

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [AppModule]
})
export class DevelopmentModule {
  constructor (
    public appRef: ApplicationRef,
    private store: Store<IState>
  ) {}

  public hmrOnInit (store) {
    // tslint:disable-next-line
    console.log('[BASE] Restoring State...')
    if (!store || !store.rootState) return
    if (store.rootState) {
      this.store.dispatch(
        { type: 'SET_ROOT_STATE', payload: store.rootState }
      )
    }

    if ('restoreInputValues' in store) { store.restoreInputValues() }
    this.appRef.tick()
    Object.keys(store).forEach((prop) => delete store[prop])
  }

  public hmrOnDestroy (store) {
    const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement)
    this.store.first().subscribe((s) => store.rootState = s)
    store.disposeOldHosts = createNewHosts(cmpLocation)
    store.restoreInputValues = createInputTransfer()
    removeNgStyles()
  }

  public hmrAfterDestroy (store) {
    store.disposeOldHosts()
    delete store.disposeOldHosts
  }
}

// tslint:disable-next-line
console.log('[BASE] DEVELOPMENT MODE')

export function bootstrapApp () {
  platformBrowserDynamic()
  .bootstrapModule(DevelopmentModule)
  // tslint:disable-next-line
  .catch((err) => console.error(err))
}

bootloader(bootstrapApp)
