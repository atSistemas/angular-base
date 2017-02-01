import environment, { constants as envConstants} from '../environment';
import getScripts from '../lib/GetScripts';

export default function renderPage():String {

  const app = getScripts('app');
  const vendor = getScripts('vendor');
  const polyfills = getScripts('polyfills');
  const style = (environment.ENV === envConstants.PRODUCTION) ? '<link rel="stylesheet" href="bundle.css">' : '';

  return `
  <!doctype html>
	<html lang="utf-8">
    <head>
      <title>Angular2 Base</title>
      <base href="/">
      ${ style }
      ${ polyfills }
      ${ vendor }
    </head>
    <body>
    <base-app>
    Loading....
    </base-app>
    ${ app }
    </body>
  </html>
  `;
}
