"use strict";
var common = require("./webpack.common.config");
var webpack = require('webpack');
var AssetsPlugin = require('assets-webpack-plugin');
exports.cache = common.cache;
exports.module = common.module;
exports.output = common.output;
exports.resolve = common.resolve;
exports.context = common.context;
exports.devtool = 'cheap-source-map';
exports.entry = {
    app: [
        common.appPath,
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client'
    ],
    polyfills: common.polyfills
};
exports.plugins = [
    new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': '"development"' } }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DllReferencePlugin({
        context: exports.context,
        manifest: require(common.dllPath + "/vendor-manifest.json")
    }),
    new AssetsPlugin({
        path: common.buildPath,
        filename: 'webpack-assets.json',
        prettyPrint: true
    }),
    common.compileError
]
    .concat(common.plugins);
