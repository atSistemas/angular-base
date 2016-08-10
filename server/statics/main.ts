import { path } from '../common/node-libs';

export interface staticRoute {
  route: string,
  dir: string
};

const commonStatics: staticRoute[] = [
  { route: '/mocks', dir: path.join(path.resolve(), 'app', 'api', 'mocks') }
];

const developmentStatics: staticRoute[] = [
  { route: '/', dir: path.join(path.resolve(), 'app') },
];

const productionStatics: staticRoute[] = [
  { route: '/', dir: path.join(path.resolve(), 'dist') },
  { route: '/assets', dir: path.join(path.resolve(), 'dist', 'assets') },
];

const statics: staticRoute[] = (process.env.NODE_ENV === 'development') ? commonStatics.concat(developmentStatics) : commonStatics.concat(productionStatics);

export default statics;
