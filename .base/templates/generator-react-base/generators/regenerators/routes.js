import * as base from '../../../../../.base'
import * as path from 'path';
import _s from 'underscore.string';

console.log(base)
const template = path.join(__dirname, 'templates', '_routes.ts');
//const destination = 
export default function regenerateRoutes() {

  const folders = base.fs.getDirectories(path.join(this.basePath, 'containers'));

  const routes = folders.map((folder) => ({
    lazy: _s.startsWith(folder, '+'),
    home: this.home === folder,
    path: folder.replace(/^\+/, '')
  }));

  this.fs.copyTpl(
    template,
    this.destinationPath(
      path.join(this.basePath, 'routes', 'index.ts')
    ), {
      routes: routes,
      _: _s
    }
  );
}