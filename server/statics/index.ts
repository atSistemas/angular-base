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
  { route: '/app', path: path.join(path.resolve(), 'src', 'app') },
  { route: '/base', path: path.join(path.resolve(), 'src', 'base') },
  { route: '/typescript', path: path.join(path.resolve(), 'node_modules', 'typescript') },
  { route: '/systemjs',path: path.join(path.resolve(), 'node_modules', 'systemjs', 'dist')},
  { route: '/plugin-typescript', path: path.join(path.resolve(), 'packages', 'github', 'frankwallis', 'plugin-typescript@5.0.9') }
];

const productionStatics: staticRoute[] = [
  { route: '/', path: path.join(path.resolve(), 'dist') },
  { route: '/assets', path: path.join(path.resolve(), 'dist', 'assets') },
];

const statics: staticRoute[] = (process.env.NODE_ENV === 'development') ? commonStatics.concat(developmentStatics) : commonStatics.concat(productionStatics);

export default statics;
