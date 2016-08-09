export default function renderMainPage(ENV){

  const common = (ENV === 'production') ? '<script src="/common.js"></script>' : '';
  const style = (ENV === 'production') ? '<link rel="stylesheet" href="bundle.css">' : '';
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
