import * as path from 'path';
import { Base } from 'yeoman-generator';
import optionOrPrompt from 'yeoman-option-or-prompt';
import templates from './templates';
import _s from 'underscore.string';

export default class AngularBaseGenerator extends Base {
  basePath = 'src/app';
  submodules = {
    container: [/*'api',
      'action',
      'action_spec',*/
      'container'/*,
      'container_spec',
      'component',
      'component_spec',
      'models',
      'reducers',
      'reducers_spec',
      'styles',
      'types'*/
    ],
    component: [
      'component',
      'styles',
      'component_spec'
    ]
  };
  constructor(...args) {
    super(...args);
    this.option('container');
    this.option('lazy');
    this.argument('name', { type: String, required: false });
    if(_s.startsWith(this.name,'+')) {
      if(this.options.container) {
        this.options.lazy = true;
        this.name = this.name.substring(1);
      }
    }
    this.name = _s.camelize(this.name);
  }

  prompting() {

    if (!this.name) {
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
  _createSubmodule(route, name, opts) {
    this.fs.copyTpl(
      this.templatePath(opts.template),
      this.destinationPath(path.join(route, (this.options.container && this.options.lazy) ? `+${name}` : name, opts.folder, opts.filename)), {
        name: name,
        _: _s
      });
  }
  get writing() {

    return {
      
      component() {
        if (this.options.container) return;

        let componentPath = path.join(this.basePath, 'components', this.name);
        this.submodules.component.forEach(submodule => this._createSubmodule(componentPath, this.name, templates[submodule]));
      },
      container() {
        if (!this.options.container) return;
        let modulePath = path.join(this.basePath, 'containers');
        this.submodules.container.forEach(submodule => this._createSubmodule(modulePath, this.name, templates[submodule]));
      }
    }
  }
  end() {
    var done = this.async();
    this.spawnCommand('npm', ['run', 'postYeomanGenerator']).on('close', done);
  }
}