import * as base from '../../../../../.base'
import * as path from 'path';
import regenerateRoutes from './routes';
import linkComponents from './components';

export default function regenerate() {
    base.console.info('Linking application routes...');
    this.conflicter.force = true;
    linkComponents.call(this);
    linkRoutes.call(this);
}