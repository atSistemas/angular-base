import * as base from '../../../../../.base'
import * as path from 'path';
import _s from 'underscore.string';

const template = path.join(__dirname, 'templates', '_routes.ts');
//const destination = 
export default function linkRoutes() {

  const folders = base.fs.getDirectories(path.join(this.basePath, 'containers'));

  const routes = folders.map((folder) => {

    base.console.success(`'${folder}' container linked successfully`)
    return {
      lazy: _s.startsWith(folder, '+'),
      home: this.home === folder,
      path: folder.replace(/^\+/, '')
    }
  });

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