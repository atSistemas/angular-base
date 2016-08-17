import * as url from 'url';
import * as fs from 'fs';

const statics: string = process.cwd() + '/src/app';

const camelize = (str: string): string => {
  return str[0].toLowerCase() + str.replace(/-([a-z])/g, (match: string, partial: string): string => {
    return partial.toUpperCase();
  }).slice(1);
}

export default function (req, res, next) {
  var parts: any = url.parse(req.url);
  var m = parts.pathname.match(/(\.ts|\.js)$/);

  if (m) {
    var moduleExtension = m[1];
    var modulePath = parts.pathname.replace(moduleExtension, '');
    fs.exists(statics + modulePath, (exists) => {
      if (exists) {
        var pathParts: string[] = modulePath.split('/')
        var moduleName: string = pathParts[pathParts.length - 1];

        res.set('Accept-Ranges', 'bytes');
        res.send(`/**
 *
 *
 *           ,-----.
 *         ,´_/_|_\_\`.
 *        /<<::8[O]::>\\
 *       _|-----------|_
 *      |  | ====-=- |  |
 *      |  | -=-==== |  |
 *      \\  | ::::|()||  /
 *       | | ....|()|| |
 *       | |_________| |
 *       | |\\_______/| |
 *      /   \\       /   \\   This is not the code
 *      \`---´       \`---´    you're looking for 
 *
 *
 *    [BASE] This is an automatically generated import script created to enable devtools debugging
 * 
 *    This file doesn't exist (and will never exist if you don't create it) in your code
 */
 
import ${camelize(moduleName)} from './${moduleName}/index.ts';
 
export ${camelize(moduleName)};
`);
      }
    });
  }
}


