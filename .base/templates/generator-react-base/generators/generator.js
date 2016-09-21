import * as path from 'path';
import * as base from '../../../../.base'
import { Base } from 'yeoman-generator';
import optionOrPrompt from 'yeoman-option-or-prompt';
import templates from './templates';
import _s from 'underscore.string';
import link from './linkers';

export default class AngularBaseGenerator extends Base {
  home = 'main';
  basePath = 'src/app';
  submodules = {
    container: [/*'api',*/
      'action',
      'action_spec',
      'module',
      'module-spec',
      'container',
      'template',
      'spec',
      'model',
      'reducers',
      'reducers_spec',
      'styles',
      'types',
      'services'
    ],
    component: [
      'component',
      'template',
      'styles',
      'spec'
    ]
  };
  constructor(...args) {
    super(...args);
    this.option('container');
    this.option('refresh');
    this.option('lazy');
    this.argument('name', { type: String, required: false });
  }
  initializing() {
    if (!this.options.refresh) {
      if (this.name) this._processName();
    }
  }
  _processName() {
    const componentPath = this.name.split('/');
    if (componentPath.length > 1) {
      this.name = componentPath.splice(componentPath.length - 1, 1)[0];
      if (componentPath.length > 1 || this.options.container) {
        base.console.error(`${this.options.container ? 'Container' : 'Component'} generator: Subcontainers are not allowed (yet?)`);
        process.exit(1);
      } else {
        this.path = path.join.apply(null, componentPath.map((item) => _s.dasherize(item).replace(/\+-/g, '+')));
      }
    }
    if (_s.startsWith(this.name, '+')) {
      if (this.options.container) {
        this.options.lazy = true;
      }
      this.name = this.name.substring(1);
    }
    this.name = _s.camelize(_s.decapitalize(this.name));
  }
  prompting() {

    if (!this.name && !this.options.refresh) {
      var done = this.async();

      var promptsAll = [{
        message: 'React-Base generator, choose your option: \n 1- New Container \n 2- New Component\n  write you option: ',
        name: 'option',
        type: 'input'
      },
      {
        message: 'Input Name',
        name: 'name',
        type: 'input'
      }];

      this._optionOrPrompt(promptsAll, function (answers) {

        this.props = answers;
        this.props.option = parseInt(answers.option);
        this.props.name = answers.name;
        done();
      }.bind(this));
    }
  }
  _createSubmoduleElement(route, name, type) {

    if ((type === 'module' || type === 'module-spec') && !this.options.lazy) return;

    let opts;

    if (type === 'module-spec') {
      opts = JSON.parse(JSON.stringify(templates['spec']));
      opts.type = 'module-spec';
    } else {
      opts = JSON.parse(JSON.stringify(templates[type]));
    }
    const dashName = _s.dasherize(name);

    let destPath = path.join(route, (this.options.container && this.options.lazy) ? `+${dashName}` : dashName);

    switch (opts.type) {

      case 'container':
      case 'spec':
      case 'template':
        let filename = this.options.lazy ? `${dashName}` : 'index';
        opts.filename = `${filename}${opts.type === 'spec' ? '.spec' : ''}.${opts.filename.substr(opts.filename.lastIndexOf('.') + 1)}`;
        break;
      default:
    }

    this.fs.copyTpl(
      this.templatePath(opts.template),
      this.destinationPath(destPath, opts.folder, opts.filename), {
        name: name,
        _: _s,
        options: this.options
      }
    );
  }
  _createComponentElement(route, name, type) {

    const opts = templates[type];

    this.fs.copyTpl(
      this.templatePath(opts.template),
      this.destinationPath(
        path.join(route, opts.filename)
      ), {
        name: name,
        _: _s,
        options: this.options
      }
    );
  }
  get writing() {

    return {
      component() {
        if (this.options.container || this.options.refresh) return;

        let componentPath = path.join(this.basePath, this.path ? path.join('containers', this.path, 'components') : 'components', _s.dasherize(this.name));
        this.submodules.component.forEach(submodule => this._createComponentElement(componentPath, this.name, submodule));
      },
      container() {
        if (!this.options.container || this.options.refresh) return;
        let modulePath = path.join(this.basePath, 'containers');
        this.submodules.container.forEach(submodule => this._createSubmoduleElement(modulePath, this.name, submodule));
      }
    }
  }
  end() {
    link.call(this);
    /*var done = this.async();
    this.spawnCommand('npm', ['run', 'postYeomanGenerator']).on('close', done);*/
  }
}