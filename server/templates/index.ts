import environment, { constants as envConstants} from '../environment';

export default function renderIndex() {

  const polyfills =  '<script src="dlls/polyfills.js"></script>';
  const vendor =  '<script src="dlls/vendor.js"></script>';
  const app = '<script src="/app.js"></script>';
  const style = (environment.ENV === envConstants.PRODUCTION) ? '<link rel="stylesheet" href="bundle.css">' : '';

  return `
  <!doctype html>
	<html lang="utf-8">
    <head>
      <title>Angular2 Base</title>
      <base href="/">
      ${ style}
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
