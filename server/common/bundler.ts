import SystemConfig from '../../system';
const base = require('../../.base');


let systemConfig = new SystemConfig();

export default class Bundler {
    protected builder: any = null;
    constructor(config?: any) {
        const Builder = require('systemjs-builder');
        this.builder = new Builder('./src', './packages.js');
        this.builder.config(systemConfig);
        if (config) {
            this.builder.config(config);
        }
    }
    
    public bundle(modules: string, config: any): PromiseLike<any> {

        return this.builder.bundle(modules, config).then((output) => {
            return output;
        });
    }
}

export class VendorBundler extends Bundler {
    public bundle(config?: any): PromiseLike<any> {
        return this.builder.buildStatic('app - [app/**/*] - [base/**/*]', config).then((output) => {
            return output;
        });
    }
}

/*
bundles: {
    "app.bundle.js": [
        "app.js",
        "main.controller.js",
        "github:angular/bower-angular@1.5.0.js",
        "github:angular/bower-angular@1.5.0/angular.js"
    ]
},
*/