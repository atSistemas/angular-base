import path from 'path';
import getEnvConfig from './env-config';

const envConfig = getEnvConfig();
const buildPath = path.resolve(__dirname, '..', 'dist');

const webpackConfig = {

  devtool: envConfig.devTool,

  entry: envConfig.entries,

  context: envConfig.context,

  plugins: envConfig.plugins,

  postcss: envConfig.postCss,

  module: {
    loaders: envConfig.loaders
  },

  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '/'
  },

  resolve: {
    extensions: ['', '.js', '.ts', '.css'],
    alias: {
      'app': path.resolve(__dirname, '../src/app'),
      'base': path.resolve(__dirname, '../src/base'),
      'components': path.resolve(__dirname, '../src/app/components'),
      'containers': path.resolve(__dirname, '../src/app/containers'),
      'shared': path.resolve(__dirname, '../src/base/shared'),
      'store': path.resolve(__dirname, '../src/base/store')
    }
  }

};

module.exports = webpackConfig;
