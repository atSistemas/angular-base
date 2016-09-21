import * as base from '../../../../../.base'
import * as path from 'path';
import _s from 'underscore.string';

const template = path.join(__dirname, 'templates', '_components.ts');
//const destination = 

function processContainer(containerPath) {
  console.log(base.fs.fileExists(path.join(containerPath, 'components')))
  if(base.fs.fileExists(path.join(containerPath, 'components'))) {
  const components = base.fs.getDirectories(path.join(containerPath, 'components'));
  console.log(components);
  } else {

  }
  
}

export default function linkComponents() {

  const containers = base.fs.getDirectories(path.join(this.basePath, 'containers'));

  containers.forEach((container) => processContainer(path.join(this.basePath, container)));
/*
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
  );*/
}