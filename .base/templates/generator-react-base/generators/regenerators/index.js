import * as base from '../../../../../.base'
import * as path from 'path';
import regenerateRoutes from './routes';

export default function regenerate() {
    base.console.info('Rebuilding application routes...');
    regenerateRoutes.call(this);
}