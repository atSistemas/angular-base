import * as path from 'path';

export interface staticRoute {
  route: string,
  path: string,
  source?: boolean
};

const commonStatics: staticRoute[] = [
  { route: '/mocks', path: path.join(path.resolve(), 'src', 'app', 'api', 'mocks') }
];

const developmentStatics: staticRoute[] = [
  { route: '/src', path: path.join(path.resolve(), 'src') },
  { route: '/base', path: path.join(path.resolve(), 'src', 'base') },
  { route: '/typescript', path: path.join(path.resolve(), 'node_modules', 'typescript') },
  { route: '/packages',path: path.join(path.resolve(), 'packages')},
  { route: '/packages/packages.js',path: path.join(path.resolve(), 'packages.js')},
   { route: '/runtime/typescript', path: path.join(path.resolve(), 'node_modules', 'typescript') },
  { route: '/runtime/plugin-typescript', path: path.join(path.resolve(), 'packages', 'github', 'frankwallis', 'plugin-typescript@4.0.16') },
  { route: '/tsconfig.json', path: path.join(path.resolve(), 'tsconfig.json') }
];

const productionStatics: staticRoute[] = [
  { route: '/', path: path.join(path.resolve(), 'dist') },
  { route: '/assets', path: path.join(path.resolve(), 'dist', 'assets') },
];

const statics: staticRoute[] = (process.env.NODE_ENV === 'development') ? commonStatics.concat(developmentStatics) : commonStatics.concat(productionStatics);

export default statics;
