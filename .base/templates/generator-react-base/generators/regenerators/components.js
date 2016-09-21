import * as base from '../../../../../.base'
import * as path from 'path';
import _s from 'underscore.string';

const template = path.join(__dirname, 'templates', '_components.ts');

function processContainer(container) {

  const containerPath = path.join(this.basePath, 'containers', container);
  const componentsPath = this.destinationPath(path.join(containerPath, 'components'))
  
  if (base.fs.fileExists(componentsPath)) {
    base.console.info(`Linking '${container}' components...`)
    let components = base.fs.readDir(componentsPath);
    components = components.filter((component) => !(/^index\.?[a-z]{2,}$/.test(component)));
    components.forEach((component) => base.console.success(`'${component}'`));
    
    this.fs.copyTpl(
      template,
      this.destinationPath(
        path.join(componentsPath, 'index.ts')
      ), {
        components: components,
        _: _s
      }
    );
  }
}

export default function linkComponents() {

  const containersPath = path.join(this.basePath, 'containers');

  const containers = base.fs.getDirectories(containersPath);

  containers.forEach((container) => processContainer.call(this, container));

}