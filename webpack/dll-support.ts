import environment from '../server/environment';
import * as fs from 'fs';
import * as path from 'path';

const base = require('../.base');
const webpack = require('webpack');
const getDllConfig = require('./webpack.dll');

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

export function getPolyfills(env?:any): Array<string> {
    return Object.keys(require('../package.json').polyfills);
}

export function getVendorModules(env?: any): Array<string> {
  return Object.keys(require('../package.json').dependencies);
}

export function buildDll(): PromiseLike<iManifests> {

    function getManifests(): iManifests {
        let vendor: iManifest = getManifest('vendor');
        let polyfills: iManifest = getManifest('polyfills');
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
            webpack(getDllConfig({ ENV: environment.ENV })).run((err, stats) => {
                if (err) {
                    reject(err);
                    return;
                }
                base.console.success("External modules bundled successfully");
                resolve(getManifests());
            });
        }
    });
}

export function root(__path: string = '.'): string {
    return path.join(__dirname, '..', __path);
}

export function getManifest(__path: string): iManifest {
    var manifest = JSON.parse(fs.readFileSync(root('./dist/dll/' + __path + '-manifest.json'), 'utf8')
        // TODO(gdi2290): workaround until webpack fixes dll generation
        .replace(/}(.*[\n\r]\s*)}(.*[\n\r]\s*)}"activeExports": \[\]/, ''));
    return manifest;
}
export function getDllAssets(chunk: string): string {
    var assets = require(root('./dist/dll/webpack-assets.json'));
    // {"vendor":{"js":"vendor.js"},"polyfills":{"js":"polyfills.js"}}
    return assets[chunk]['js']
}
export function getAssets(chunk: string): string {
    var assets = require(root('./dist/webpack-assets.json'));
    // {"vendor":{"js":"vendor.js"},"polyfills":{"js":"polyfills.js"}}
    return assets[chunk]['js']
}

