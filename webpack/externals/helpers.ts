import * as fs from 'fs';
import * as path from 'path';
import { iManifest } from './index';

export function getPolyfills(env?:any): Array<string> {
    return Object.keys(require('../package.json').polyfills);
}

export function getVendorModules(env?: any): Array<string> {
  return Object.keys(require('../package.json').dependencies);
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

