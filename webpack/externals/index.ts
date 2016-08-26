import * as helpers from './helpers';
import environment from '../../server/environment';
export * from './helpers';

const base = require('../../.base');
const webpack = require('webpack');
const externalsConfig = require('../webpack-externals');

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
            webpack(externalsConfig({ ENV: environment.ENV })).run((err, stats) => {
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
