const templateTypes =  {
  action: {
    folder: '/actions/',
    template: '_action.js',
    filename: '/index.ts',
    type: 'action'
  },
  action_spec: {
    folder: '/actions/',
    template: '_action.spec.js',
    filename: 'index.spec.js',
    type: 'action_spec'
  },
  api: {
    folder: '/api/',
    template: '_api.js',
    filename: '/index.js',
    type: 'api'
  },
  component: {
    folder: './',
    template: '_component.js',
    filename: '/index.ts',
    type: 'component'
  },
  template: {
    folder: './',
    template: '_component.html',
    filename: 'index.html',
    type: 'template'
  },
  spec: {
    folder: './',
    template: '_component.spec.js',
    filename: 'index.spec.js',
    type: 'spec'
  },
  module: {
    folder: './',
    template: '_module.ts',
    filename: '/index.ts',
    type: 'module'
  },
  container: {
    folder: './',
    template: '_container.ts',
    filename: '/index.ts',
    type: 'container'
  },
  model: {
    folder: '/models/',
    template: '_model.ts',
    filename: '/index.ts',
    type: 'models'
  },
  reducers: {
    folder: '/reducers/',
    template: '_reducer.ts',
    filename: 'index.ts',
    type: 'reducer'
  },
  reducers_spec: {
    folder: '/reducers/',
    template: '_reducer.spec.js',
    filename: 'index.spec.js',
    type: 'reducer_spec'
  },
  styles: {
    folder: './',
    template: '_styles.css',
    filename: '/styles.css',
    type: 'styles'
  },
  types: {
    folder: '/action-types/',
    template: '_action-types.ts',
    filename: 'index.ts',
    type: 'types'
  }
};

export default templateTypes;