import express from 'express';
import compression from 'compression';
import statics from './statics';
import ENV from '../src/base/shared/Env';

import renderMainPage from './templates/main-page';
import { symbols, color } from '../src/base/shared/console';
import applyEnvMiddleWare from './middleware';


const port = 8000;
const app = express();
app.use(compression({level: 6}));
const context = 'server';
const staticPaths = setStaticsPaths(statics);
const envMiddleware = applyEnvMiddleWare(ENV, app);

function setStaticsPaths(staticPaths){
  staticPaths.map(function(staticPath){
    app.use(staticPath.route, express.static(staticPath.dir));
    console.log('[BASE] ' + color('success', symbols.ok) + ' Applied static path ' + staticPath.route);
  });
}


app.use(function (req, res) {
  let page =  renderMainPage( ENV );
  res.status(200).send(page);
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('[BASE] ' + color('success', symbols.ok) + ' Server up on http://localhost:' +  port);

});
