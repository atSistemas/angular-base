/// <reference path="../typings/globals/node/index.d.ts" />

import * as path from 'path';
import environment from '../server/environment';
//import * as wakk from 'fs-walk';

const walk = require('fs-walk');
var baseConfig = require("./config.base.json");
var bootstrapConfig = require('./config.bootstrap.json');
var moduleConfig = require('./config.module.json');

export default class SystemConfig {

    //public config: any = null;

    constructor() {

        this.extend(baseConfig);
        this.loadEnvironmentDefaults();
        this.discoverPackages();

    }

    private loadEnvironmentDefaults() {
        this.extend(require(`./config.${environment.ENV}.json`));
    }

    private _extend(obj: any, src: any): any {
        Object.keys(src).forEach((key) => {
            if (src[key] === Object(src[key])) {
                obj[key] = obj[key] || {}
                obj[key] = this._extend(obj[key], src[key]);
            } else {
                obj[key] = src[key];
            }
        });
        return obj;
    }

    public clone(obj: any): any {
        if (null == this || "object" != typeof this) return this;
        var copy = this.constructor();
        for (var key in this) {
            if (this.hasOwnProperty(key)) copy[key] = this[key];
        }
        return copy;
    }

    private discoverPackages() {
        let packages = {};

        var rootdir = path.resolve(__dirname, '../src');
        var rootdirRegExp = new RegExp(`^${rootdir}\/?`)
        walk.dirsSync(rootdir, (basedir, filename, stat, next) => {
            basedir = basedir.replace(rootdirRegExp, '');
            const modulePath = basedir ? basedir + '/' + filename : filename;
            switch (modulePath) {
                case "app":
                    packages[modulePath] = bootstrapConfig;
                    break;
                default:
                    packages[modulePath] = moduleConfig;
            }
        }, (err) => {
            if (err) console.log(err);
        });

        this.extend({ packages: packages });
    }

    public extend(obj: any) {
        this._extend(this, obj);
    }

};
