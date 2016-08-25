const base = require('../../.base');
import { VendorBundler } from '../common/bundler'

let bundleTimer = base.timer('bundle');

const vendorBundler = new VendorBundler();
let bundle = vendorBundler.bundle({ minify: false, sourceMaps: true, mangle: false, encodeNames: false }).then((output) => {
  let elapsed = bundleTimer();
  base.console.success(`Third party dependencies bundled successfully in ${elapsed.time} seconds`);
  return output;
});


export default function (req, res, next): void {

  bundle.then((output:any) => {
    if (req.baseUrl === '/vendor.js') {
      
      output.modules.forEach((oModule)=> console.log(oModule));
      console.log("returning build")
      res.status(200).send(output.source);
      return;
    }
    next();
  });

};