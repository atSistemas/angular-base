import { environmentInterface } from './index';

const development: environmentInterface = {
  port: 8000,
  ENV: process.env.NODE_ENV
};


export default development;