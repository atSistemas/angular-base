const base = require('../../.base');
const Builder = require('systemjs-builder');
const systemConfig = require('../../system');
const builder = new Builder('./src', './packages.js');

builder.config(systemConfig);

let bundle = new Promise((resolve, reject) => {
  let bundleTimer = base.timer('bundle');
  base.console.info(`Bundling front end dependencies...`);


  builder.bundle('app - [app/**/*]', { minify: false, sourceMaps: false }).then((output) => {
    let elapsed = bundleTimer();
    base.console.success(`Third party dependencies bundled successfully in ${elapsed.time} seconds`);
    resolve(output.source);
  }).catch(function(err) {
    console.log(err);
    reject(err)
  });
});

export default function (req, res, next):void {
  bundle.then((bundle) => {
    if (req.baseUrl === '/vendor.js') {
      console.log("returning build")
      res.status(200).send(bundle);
      return;
    }
    next();
  });
};