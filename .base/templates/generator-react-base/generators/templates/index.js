const templateTypes =  {
  action: {
    folder: '/actions/',
    template: '_action.js',
    filename: '/index.ts',
    type: 'action'
  },
  action_spec: {
    folder: '/actions/spec/',
    template: '_action.spec.js',
    filename: '.action.spec.js',
    type: 'actionSpec'
  },
  api: {
    folder: '/api/',
    template: '_api.js',
    filename: '/index.js',
    type: 'api'
  },
  component: {
    folder: '/components/',
    template: '_component.js',
    filename: '/index.ts',
    type: 'component'
  },
  template: {
    folder: '/components/',
    template: '_component.html',
    filename: 'index.html',
    type: 'template'
  },
  spec: {
    folder: '/components/spec/',
    template: '_component.spec.js',
    filename: 'index.spec.js',
    type: 'spec'
  },
  module: {
    folder: '/',
    template: '_module.ts',
    filename: '/index.ts',
    type: 'module'
  },
  container: {
    folder: '/',
    template: '_container.ts',
    filename: '/index.ts',
    type: 'container'
  },
  models: {
    folder: '/models/',
    template: '_models.js',
    filename: '/index.ts',
    type: 'models'
  },
  reducers: {
    folder: '/reducers/',
    template: '_reducer.js',
    filename: '/index.ts',
    type: 'reducer'
  },
  reducers_spec: {
    folder: '/reducers/spec/',
    template: '_reducer.spec.js',
    filename: '.reducer.spec.js',
    type: 'reducer_spec'
  },
  styles: {
    folder: '/',
    template: '_styles.css',
    filename: '/styles.css',
    type: 'styles'
  },
  types: {
    folder: '/types/',
    template: '_types.js',
    filename: '/index.js',
    type: 'types'
  }
};

export default templateTypes;