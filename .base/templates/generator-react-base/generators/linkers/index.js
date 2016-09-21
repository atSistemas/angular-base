import * as base from '../../../../../.base'
import * as path from 'path';
import linkRoutes from './routes';
import linkComponents from './components';

export default function link() {
    base.console.info('Linking application routes...');
    this.conflicter.force = true;
    linkComponents.call(this);
    linkRoutes.call(this);
}