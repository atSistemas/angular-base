import environment from '../server/environment';
const fs = require('fs');
const base = require('../.base');
const webpack = require('webpack');
const path = require('path');
const dllConfig = require('./webpack.dll');

function tryDll(cb) {
    try {
        return cb()
    } catch (e) {
        base.console.info("Bundling %s...", "external modules");
        webpack(dllConfig({ENV: environment.ENV}), cb);
    }
}

export function root(__path = '.') {
  return path.join(__dirname, '..', __path);
}

export function getManifest(__path) {
    var manifest = tryDll(() => JSON.parse(fs.readFileSync(root('./dist/dll/' + __path + '-manifest.json'), 'utf8')
        // TODO(gdi2290): workaround until webpack fixes dll generation
        .replace(/}(.*[\n\r]\s*)}(.*[\n\r]\s*)}"activeExports": \[\]/, '')))
    return manifest;
}
export function getDllAssets(chunk) {
    var assets = tryDll(() => require(root('./dist/dll/webpack-assets.json')));
    // {"vendors":{"js":"vendors.js"},"polyfills":{"js":"polyfills.js"}}
    return assets[chunk]['js']
}
export function getAssets(chunk) {
    var assets = tryDll(() => require(root('./dist/webpack-assets.json')));
    // {"vendors":{"js":"vendors.js"},"polyfills":{"js":"polyfills.js"}}
    return assets[chunk]['js']
}

