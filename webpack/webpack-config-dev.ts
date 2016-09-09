///<reference path="../node_modules/@types/node/index.d.ts"/>
import * as base from '../.base';
import environment from '../server/environment';
import * as common from './webpack-config-common';
import { getPolyfills, getManifest, root } from './dll';
const { ForkCheckerPlugin, TsConfigPathsPlugin} = require('awesome-typescript-loader');
const { HotModuleReplacementPlugin } = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');

export const devtool = 'cheap-source-map';

export const context = common.context;

export const entry = {
  application: common.entry.application.concat(
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false'
  )
};

export const plugins = [
  new HotModuleReplacementPlugin()
].concat(common.plugins);

export const preLoaders = common.preLoaders;

export const loaders = common.loaders;

export const postCss = common.postCss;
