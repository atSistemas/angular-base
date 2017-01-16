import * as path from 'path';
import { createEngine } from 'angular2-express-engine';

import * as base from '../../.base';
import { ENV, MODE } from '../../src/base/shared/Env';
import { AppModule } from '../../src/app/universal.module';
import { FileSystemResourceLoader } from '../../src/app/resource-loader';
import { ResourceLoader } from '@angular/compiler';
import { platformNodeDynamic } from 'angular2-universal/node';

const viewPath = path.resolve(__dirname, '../templates');

export function applyViewEngine(app) {

    app.engine('.html', createEngine({
        ngModule: AppModule,
        platform: (extraProviders) => {
            var platform = platformNodeDynamic(extraProviders);
            (<any>platform).cacheModuleFactory_old = platform.cacheModuleFactory;

            platform.cacheModuleFactory = (moduleType: any, compilerOptions?: any): Promise<any> => {
                if (!compilerOptions) {
                    compilerOptions = {
                        providers: [
                            { provide: ResourceLoader, useClass: FileSystemResourceLoader }
                        ]
                    }
                }
                return (<any>platform).cacheModuleFactory_old(moduleType, compilerOptions);
            }
            return platform;
        }
    }));
    app.set('views', viewPath);
    app.set('view engine', 'html');
    base.console.success(`Applied Angular2 Express Engine`);
}
