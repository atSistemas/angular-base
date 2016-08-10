import environment from '../../environment';
import devMiddleware from './development';
import prodMiddleware from './production';

const middleware = (ENV === 'development') ? devMiddleware : prodMiddleware;

export default function applyEnvMiddleWare(env, app){
  envMiddleware().forEach(function(middleware){
    const middlewareName = middleware.name || 'middleware';
    app.use(middleware);
    console.log('[BASE] ' + color('success', symbols.ok) + ' Applied ' + middlewareName);
  });
}


