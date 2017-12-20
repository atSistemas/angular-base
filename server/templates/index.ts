import environment, { constants as envConstants } from '../environment';
import getScripts from '../lib/GetScripts';

export default function renderPage(): string {

  const app = getScripts('app');
  const vendor = getScripts('vendor');
  const polyfills = getScripts('polyfills');
  return `
  <!doctype html>
	<html lang="utf-8">
    <head>
      <title>Angular2 Base</title>
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
