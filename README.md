![Angular2-Base logo](https://raw.githubusercontent.com/atSistemas/angular-base/master/app/app.assets/img/angular-base-logo.png)

# Angular2-Base

![Npm-Version](https://img.shields.io/badge/npm-6.2.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

**A modular platform for Reactive Redux Isomorphic applications**

This repository is a modular abstraction to build a [Angular](https://angular.io/) web application based on [Redux](http://redux.js.org/) paradigm.
You can use it to quickly scaffold your React web application projects and development environments for these projects.

This seed should clarify how to wire up all the modules of your application, even when we understand that in some cases
there must be some changes needed by the structure to fit your needs correctly

## Overview

**Angular2-Base** makes use of the latest tools to improve your workflow, and enables you to create future ready applications:

- [Angular 4](http://angular.io/) supported
- [AOT](http://angular.io/) mode supported
- Lazy Loading routing
- [Redux](http://redux.js.org/) based architecture using [@ngrx/Store](https://github.com/ngrx/store) for a reactive state managment.
- [@ngrx/SideEffects](https://github.com/ngrx/effects) to handle Rx Side Effects
- [Typescript2](https://www.typescriptlang.org/) and ES6 transpilation using [Typescript2](https://www.typescriptlang.org/)
- [Webpack2](https://webpack.github.io/) for the development/production build toolchain
- [Webpack DLL](https://github.com/webpack/docs/wiki/list-of-plugins#dllplugin) thats increases build times.
- Isomorphic / Universal Javascript Apps for a
- Separate build configurations depending on target environment
- Development & Production server using [express](https://github.com/expressjs/express) and [webpack-dev-server](https://webpack.github.io/)
- Hot Reload/Live Reload support for Js & Css using  [Webpack2 HMR](https://webpack.github.io/docs/hot-module-replacement.html)
- Container and component generators using [Yeoman](https://github.com/yeoman/yo)
- [Mocha](https://mochajs.org/) as testing framework
- [Chai](http://chaijs.com/) as assertion library
- [Jsdom](https://github.com/tmpvar/jsdom) as Whatwg Dom implementation.
- [Nyc](https://github.com/bcoe/nyc) for code coverage
- [CssModules](https://github.com/css-modules/css-modules) based
- [PostCSS](http://postcss.org/) processing with isomorphic support.
- CSS Vars using [Cssnext](http://cssnext.io/)
- Code Linting using [TsLint](https://palantir.github.io/tslint/)
- Css Linting using [CssLint](https://github.com/stylelint/stylelint)
- Baked in best-practices of [Google Angular2 Style Guide](https://angular.io/styleguide)


## Getting Started

To get you started, you need to meet the prerequisites, and then follow the installation instructions.

### Prerequisites

Angular2-Base makes use a number of NodeJS tools to initialize and test Angular2-Base. You must have node.js 6.0.0 at least, and its package manager (npm) installed. You can get it from [nodejs.org](node).

### Installing

You can clone our Git repository:

`$ git clone https://github.com/atSistemas/angular2-base.git`

This method requires Git to be installed on your computer. You can get it from
[here](http://git-scm.com).

### Wiring up your development environment

Setting up **Angular2-Base** is as easy as running:

`$ npm install`

This command will install all the required dependencies and start your development server, which takes care of all the changes you make to your code and runs all the awesome stuff that ends with your code automagically transpiled and running on your browser.

Please note that `npm install` is only required on your first start, or in case of updated dependencies.


### Initializing development server

  Once all the dependencies are installed, you can run `$ npm run start` to initialize your development server using [webpack-dev-server](https://webpack.github.io/) express middleware.

  The dev server uses  [HMR](https://webpack.github.io/docs/hot-module-replacement.html) (Hot module replacement) that injects updated modules into the bundle in runtime. It's like LiveReload


## Architecture

Angular2-Base is based on [Redux](http://redux.js.org/)  paradigm so you can find all the typical entities of an Redux project like [reducers](http://redux.js.org/docs/basics/Reducers.html) , [store](http://redux.js.org/docs/basics/Store.html), [actions](http://redux.js.org/docs/basics/Actions.html) , etc.

There are four main folders:

* `server` contains Angular2-Base development & production server based in express with Universal/Isomorphic support and custom middlewares like Gzip.

```javascript
server
  enviroment/ //enviroment configuration
  lib/ //Universal rendering files
  middleware/ //enviroment middleware
  routes/ //universal routing
  statics/ //definition of  statics path
  templates/ //universal templates
    server  //Server
```

* `webpack` contains Angular2-Base Webpack2 configuration separated by enviroment that allows to use different plugins and loaders in each target enviroment.

```javascript
webpack
  webpack.common.config/ //Common config
  webpack.dev.config/ //Development config
  webpack.prod.config/ //Production config
  webpack.test.config/ //Testing config
  webpack.dll.config/ //Dll config
```

* `src/base/` contains Angular2-Base platform bootstrapping code.

```javascript
base
  actions/ //base actions
  components/ //base components
  decorators/ //custom decorators like Reduxify
  effects/ //side side RxJs effects
  imports/ //base imports
  models/ //model index
  reducers/  //reducer index
  shared/ // shared base folder
    BaseService  //Root HHtp Service
    CreateRecuer //Custom reducer creator
    ENV //Env handler
    Errors //Errors handler
    FileSystem //Filesystem manager
    JsDomSetup //JsDom Configuration FileSystem
    Regenerate // Regenerate indexes
  store/ //Store configuration and AppState definition
  ...
```

* `src/app/` is the place where to put your application source code.

Angular2-Base uses a "featured based" distribution, so all the necessary code for each page/features is located in its own folder inside containers folder as in `src/app/containers/myContainer`

A container is an Angular2 Module who contains other components, Redux entities, functions and store subscriptions. Each container is self-contained and represents a feature like "clients" or "products" and it contains all the necessary stuff.
```javascript
app/
  containers/
    myContainer/
      actionTypes/
      actions/
      components/
      models/
      reducers/
      index.ts
  ...
```

## Action Types
ActionTypes it's a representation using constants of your possible actions:

```javascript
export const ActionTypes = {
    USER_CLICK:     'USER_CLICK',
    MAIN_CONTAINER: 'MAIN_CONTAINER',
    MAIN_ERROR:     'MAIN_ERROR',
    MAIN_REQUEST:   'MAIN_REQUEST',
    MAIN_SUCCESS:   'MAIN_SUCCESS',
    LAZY_CONTAINER: 'LAZY_CONTAINER',
    LOGIN:   'LOGIN',
};

```

## Actions
Actions are payloads of information witch represent that something happend in your application and  send data from your application to your store:

```javascript
public clickHandler(id: Number): Action {
    return {
      type: ActionTypes.USER_CLICK,
      payload: {
        id: id
      }
    };
}

//Dispatching an action...

this.store.dispatch(this.mainActions.clickHandler(rowId));

```

Yo can wrap functions or service call into the payload of your actions.


## Reducers
Reducers describe how the state of your application changes in response to a new Action. Angular-2 uses a custom CreateReducer that allows to use separated reducers functions instead of "switch based" reducers.

```javascript
const click = (state, action) => {
  return state.update('mainData', (value) => action.payload);
};

const request = (state, action) => {
  return state;
};

const actionHandlers = {
  [ActionTypes.CLICK]: click,
  [ActionTypes.LOGIN]: login,
  [ActionTypes.MAIN_REQUEST]: request,
  [ActionTypes.MAIN_SUCCESS]: success,
};

const MainReducer = createReducer<MainModelInterface>(actionHandlers, InitialState);

export { MainReducer }
```

## Models
Represents your model data using Typescript Interfaces.


```javascript
export interface MainModelInterface {
  id: number;
  name: string;
  departmentId: number;
  ...
};

```

## State Managment

The state of your applicacion is located in the [Store](http://redux.js.org/docs/api/Store.html) using
[@ngrx/Store](https://github.com/ngrx/store), a reactive state container using [Rxjs](https://github.com/ReactiveX/rxjs).
The Shape of your state and it's configuration its defined in the AppState interface in store/index.ts.

```javascript
export interface AppState {
  router: RouterState;
  products: productsState;
  clients: clientsState;
  ....
};

//Allows different plugins and middleware for development or production

export function configureStore(rootReducer) {
  if (base.ENV === 'development') {
    return compose(RequestMiddleware, storeFreeze, storeLogger())(rootReducer);
  } else {
    return compose(RequestMiddleware)(rootReducer);
  }
}

```

The store is an Observable so you can subscribe to it using select method:


```javascript
export class ProductsContainer {
  products$: Observable<Product[]>;

  constructor(store: Store<AppState>) {
   this.products$ = this.store.select(state => state.products);
  }
}

```

Angular2 Async Pipe allows you to unwrap/unsubscribe from an Observer when it's return his lastest value:

```javascript
@Component({
  selector: 'client-name',
  template: '<div><code>clientName|async</code>: clientName: {{ clientName | async }}</div>'
})

```

### Generating a new container

Angular2-Base uses Yeoman to generate new application containers or components.

To generate a new container run:

`$ npm run generate:container`

You'll be asked to provide a name for your container. After that, Angular2-Base will create all the necessary folder and file template structures you, and will rebuild the file indexes (routes, reducers, models, etc), so you don't have to worry about including all the required imports.

After that, you can access to your container from http://localhost:8000/myContainer

### Regenerating indexes

You can rebuild the file indexes (reducers, models and routes) running `$ npm run regenerate`

### Generating a new component

As with containers, Angular2-Base can automate components creation for you. To create a new component, just type:

`$ npm run generate:component`

Same as before, you will be asked for a component name, and after that Angular2-Base will do the rest, placing a component template under `app/components`, and rebuilding all the indexes.

## Distribution

You can generate a complete distribution source ready for production enviroment. It uses Three shaking and AOT mode wichs improves rendering and reduce build sizes.

### Building your application

`$ npm run build` will create a minified version for your application, ready for production.

### Running production server

`$ npm run start:prod` will run production enviroment of your application serving content from dist directory.


## Testing your application

Angular2-Base base uses - [Jsdom](https://github.com/tmpvar/jsdom) a Javascript implementation of Whatwg Dom and Html Standards using NodeJs.
- [Mocha](https://mochajs.org/) as testing framework
- [Chai](http://chaijs.com/) as assertion library
You can write your tests normally using Mocha and Chai for assertions.

### Running your tests

`$ npm run test` will perform your unit testing, or npm test:coverage to run your tests and display a code coverage report.

### Generating code coverage

Angular2-Base uses [Nyc](https://github.com/bcoe/nyc) for code coverage and you can generate reports in console or icov/html format.

`$ npm run test` will perform your code coverage, generating an html report located in coverage/ folder.

## Contributing

Anyone and everyone is welcome to contribute, however, if you decide to get involved, please take a moment to review the [guidelines](CONTRIBUTING.md):

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)

## License

**Angular2-Base** is available under the [MIT license](LICENSE).
