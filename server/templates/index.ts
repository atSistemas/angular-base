import environment, { constants as envConstants } from '../environment';
import getScripts from '../lib/GetScripts';

export default function renderPage(): string {

  const app = getScripts('app');
  const vendor = getScripts('vendor');
  const polyfills = getScripts('polyfills');
  const favicon = (environment.ENV === envConstants.PRODUCTION) ? '<link rel="stylesheet" href="bundle.css">' : '';
  return `
  <!doctype html>
	<html lang="utf-8">
    <head>
      <title>Angular2 Base</title>
      <link rel="icon" href="assets/images/favicon.ico"/>
      <base href="/">
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
