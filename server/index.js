const System = require('./bootstrap');

console.log('[BASE] Starting ' + (process.env.NODE_ENV  || 'development').toUpperCase() + ' enviroment...');

System.import('server').then(function (module) {
  console.log('[BASE] Server application initialized...');
}).catch(function (error) {
  setTimeout(function () {
    throw error;
  }, 0);
});
