import { environmentInterface } from './index';

const production: environmentInterface = {
  port: 8000,
  ENV: process.env.NODE_ENV
};

export default production;