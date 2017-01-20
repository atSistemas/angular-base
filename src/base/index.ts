import { Action } from 'redux';

// export * from './store';
// export * from './routes';
// export { BaseReduxify } from './decorators';
// export * from './models';
// export * from './components';

export interface PayloadAction extends Action {
  payload?: any;
}

import * as console from './shared/console';
import { ENV } from './shared/Env';

export {
    console,
    ENV,
};
