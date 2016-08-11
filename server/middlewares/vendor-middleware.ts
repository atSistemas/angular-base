import * as Builder from 'systemjs-builder';

var builder = new Builder('./', './system-config.json');
var build: any;

builder.bundle('src/app/**/* - [src/**/*]', { minify: true, sourceMaps: true }).then(function(output) {
  console.log("output");
  console.log(output)
  console.log(output.source);    // generated bundle source
  console.log(output.sourceMap); // generated bundle source map
  console.log(output.modules);   // array of module names defined in the bundle
  build = output;
}).catch(function(e) {
  console.log(e)
});

export default function (req, res, next) {

    console.log(build);
    
};