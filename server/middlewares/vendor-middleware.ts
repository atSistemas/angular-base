
//import Bundler from '../common/bundler';
const base = require('../../.base');
import { VendorBundler } from '../common/bundler'

let bundleTimer = base.timer('bundle');

console.log("magic");

const vendorBundler = new VendorBundler();
let bundle = vendorBundler.bundle({ minify: false, sourceMaps: false }).then((output) => {
  let elapsed = bundleTimer();
  base.console.success(`Third party dependencies bundled successfully in ${elapsed.time} seconds`);
  return output;
});


export default function (req, res, next): void {

  bundle.then((output:any) => {
    if (req.baseUrl === '/vendor.js') {
      console.log("returning build")
      output.modules.forEach((oModule)=> console.log(oModule));
      res.status(200).send(output.source);
      return;
    }
    next();
  });

};
;

/*
builder.config(systemConfig);

console.log(builder);
export let vendor = new Promise((resolve, reject) => {
  let bundleTimer = base.timer('bundle');
  base.console.info(`Bundling front end dependencies...`);


  builder.bundle('app - [app/***]', { minify: false, sourceMaps: false }).then((output) => {
    let elapsed = bundleTimer();
    console.log(output.modules)
    base.console.success(`Third party dependencies bundled successfully in ${elapsed.time} seconds`);
    resolve(output.source);
  }).catch(function (err) {
    console.log(err);
    reject(err)
  });
});
*/