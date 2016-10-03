import * as base from '../.base';
import environment, { isTesting } from '../server/environment';
import * as common from './webpack-config-common';
import { getPolyfills, getManifest, root } from './dll';

const { HotModuleReplacementPlugin } = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');

export const devtool = 'eval-source-map';

export const entry = {
  application: common.entry.application.concat(
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false'
  )
};
/*
export const entry = {
  application: [
    common.entry.application,
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client'
  ],
}*/

export const context = common.context;
export const plugins = [
  new HotModuleReplacementPlugin()
].concat(common.plugins);

export const module = common.module;
//export const postCss = common.postCss;
export const output = common.output;
export const resolve = common.resolve;
