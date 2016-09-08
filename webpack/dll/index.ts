/// <reference path="../webpack.d.ts" />
/// <reference path="../../node_modules/@types/node/index.d.ts"/>

import * as helpers from './helpers';
import * as path from 'path';
import environment from '../../server/environment';
import * as pathToRegExp from 'path-to-regexp';
import * as base from '../../.base';
export * from './helpers';

const webpack = require('webpack');
const webpackConfig = require('../webpack-externals');

export interface iManifestDictionary {
    [index: string]: {
        id: number,
        meta: any,
        hasStarExport: boolean,
        activeExports: Array<any>
    }
}
export interface iManifest {
    name: string,
    content: {
        iManifestDictionary
    }
}

interface iManifests {
    vendor: iManifest,
    polyfills: iManifest
}

export const externalsPath: string = 'dist/dll';
export const assetsPath: string = 'dist';

export class ExternalsMiddleware {
    constructor(pathExp: string) {
        return function externalsMiddleware(req, res, next) {

            const pathRegEx: RegExp = pathToRegExp(pathExp);

            if (pathRegEx.test(req.url)) {
                var files = req.path.split('/');
                var chunk = files[files.length - 1].replace('.js', '');
                try {
                    res.sendFile(path.resolve(helpers.root(externalsPath), helpers.getExternals(chunk)));
                } catch (e) {
                    next();
                }
            } else {
                next();
            }
        }
    }
}

export default function buildExternals(): PromiseLike<iManifests> {

    function getManifests(): iManifests {
        let vendor: iManifest = helpers.getManifest('vendor');
        let polyfills: iManifest = helpers.getManifest('polyfills');
        return { vendor: vendor, polyfills: polyfills };
    }

    return new Promise((resolve, reject) => {
        base.console.info("Checking external modules...");
        try {
            const manifests: iManifests = getManifests();
            base.console.success("External modules already bundled!");
            resolve(manifests);
        } catch (e) {
            base.console.info("Bundling external modules...");
            webpack(webpackConfig({ ENV: environment.ENV })).run((err, stats) => {
                if (err) {
                    base.console.error(err);
                    reject(err);
                    return;
                }
                base.console.success("External modules bundled successfully");
                resolve(getManifests());
            });
        }
    });
}
