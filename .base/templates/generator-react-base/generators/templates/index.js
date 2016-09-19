const templateTypes =  {
  action: {
    folder: '/actions/',
    template: '_action.js',
    filename: '/index.js',
    nameType: 'action'
  },
  action_spec: {
    folder: '/actions/spec/',
    template: '_action.spec.js',
    filename: '.action.spec.js',
    nameType: 'actionSpec'
  },
  api: {
    folder: '/api/',
    template: '_api.js',
    filename: '/index.js',
    nameType: 'api'
  },
  component: {
    folder: '/components/',
    template: '_component.js',
    filename: '/index.jsx',
    nameType: 'component'
  },
  component_spec: {
    folder: '/components/spec/',
    template: '_component.spec.js',
    filename: '.component.spec.js',
    nameType: 'component_spec'
  },
  container: {
    folder: '/',
    template: '_container.js',
    filename: '/index.jsx',
    nameType: 'container'
  },
  container_spec: {
    folder: '/spec/',
    template: '_container.spec.js',
    filename: '.container.spec.js',
    nameType: 'container_spec'
  },
  models: {
    folder: '/models/',
    template: '_models.js',
    filename: '/index.js',
    nameType: 'models'
  },
  reducer: {
    folder: '/reducers/',
    template: '_reducer.js',
    filename: '/index.js',
    nameType: 'reducer'
  },
  reducer_spec: {
    folder: '/reducers/spec/',
    template: '_reducer.spec.js',
    filename: '.reducer.spec.js',
    nameType: 'reducer_spec'
  },
  styles: {
    folder: '/',
    template: '_styles.css',
    filename: '/styles.css',
    nameType: 'styles'
  },
  types: {
    folder: '/types/',
    template: '_types.js',
    filename: '/index.js',
    nameType: 'types'
  }
};

export default templateTypes;