import environment, { constants as envConstants} from '../environment';

export default function renderIndex() {

  const common =  '<script src="dlls/polyfills.js">\n</script>\n<script src="dlls/vendor.js"></script>';
  const app = '<script src="/app.js"></script>';
  const style = (environment.ENV === envConstants.PRODUCTION) ? '<link rel="stylesheet" href="bundle.css">' : '';

  return `
  <!doctype html>
	<html lang="utf-8">
    <head>
      <title>Angular2 Base</title>
      <base href="/">
      ${ style}
      ${ common }
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
