import environment, { constants as envConstants} from '../environment';

export default function renderIndex() {
  const common = (environment.ENV === envConstants.DEVELOPMENT) ? '<script src="/common.js"></script>' : '';
  const style = (environment.ENV === envConstants.PRODUCTION) ? '<link rel="stylesheet" href="bundle.css">' : '';
  return `
  <!doctype html>
	<html lang="utf-8">
    <head>
      <title>Angular2 Base</title>
      <base href="/">
      <script src="externals/polyfills.js"></script>
      <script src="externals/vendor.js"></script>
      ${ style}
    </head>
    <body>
    <base-app>
    Loading....
    </base-app>
    <script src="/main.bundle.js"></script>
    </body>
  </html>
  `;
}
