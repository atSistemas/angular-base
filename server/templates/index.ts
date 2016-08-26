import environment, { constants as envConstants} from '../environment';

export default function renderIndex (){

  const common = (environment.ENV === envConstants.DEVELOPMENT) ? '<script src="/common.js"></script>' : '';
  const style = (environment.ENV === envConstants.PRODUCTION) ? '<link rel="stylesheet" href="bundle.css">' : '';
  return `
  <!doctype html>
	<html lang="utf-8">
    <head>
      <title>Angular2 Base</title>
      <base href="/">
      ${ style }
    </head>
    <body>
    <div id="root"></div>
    <base-app>
    Loading....
    </base-app>
    <script src="/bundle.js"></script>
    </body>
  </html>
  `;
}
