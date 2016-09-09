import * as fs from 'fs';
import * as path from 'path';
import { iManifest, externalsPath, assetsPath } from './index';

export function getPolyfills(): string[] {
    return require('../../package.json')._packages.polyfills;
}

export function getVendorModules(env?: any): Array<string> {
  return Object.keys(require('../../package.json').dependencies);
}


export function root(__path: string = '.'): string {
    return path.join(__dirname, '..', '..', __path);
}

export function getManifest(__path: string): iManifest {
    var manifest = JSON.parse(fs.readFileSync(root(externalsPath + '/' + __path + '-manifest.json'), 'utf8')
        // TODO(gdi2290): workaround until webpack fixes dll generation
        .replace(/}(.*[\n\r]\s*)}(.*[\n\r]\s*)}"activeExports": \[\]/, ''));
    return manifest;
}
export function getExternals(chunk: string): string {
    var assets = require(root(`${externalsPath}/webpack-assets.json`));
    // {"vendor":{"js":"vendor.js"},"polyfills":{"js":"polyfills.js"}}
    return assets[chunk]['js']
}
export function getAssets(chunk: string): string {
    var assets = require(root(`${assetsPath}/webpack-assets.json`));
    // {"vendor":{"js":"vendor.js"},"polyfills":{"js":"polyfills.js"}}
    return assets[chunk]['js']
}

