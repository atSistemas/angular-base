import * as base from '../../../../../.base'
import * as path from 'path';
import regenerateRoutes from './routes';

export default function regenerate() {
    base.console.info('Linking application routes...');
    this.conflicter.force = true;
    regenerateRoutes.call(this);
}