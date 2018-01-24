![Angular-Base logo](https://raw.githubusercontent.com/atSistemas/angular-base/master/app/app.assets/img/angular-base-logo.png)

# Angular-Base

![Npm-Version](https://img.shields.io/badge/npm-8.9.4-blue.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

**A modular platform for Reactive Redux applications**

This repository is a modular abstraction to build a [Angular](https://angular.io/) web application based on [Redux](http://redux.js.org/) paradigm.
You can use it to quickly scaffold your Angular web application projects and development environments for these projects.

This seed should clarify how to wire up all the modules of your application, even when we understand that in some cases
there must be some changes needed by the structure to fit your needs correctly

## Overview

**Angular-Base** makes use of the latest tools to improve your workflow, and enables you to create future ready applications:

- [Angular 5](http://angular.io/) supported
- [AOT](http://angular.io/) mode supported
- Lazy Loading routing
- [Redux](http://redux.js.org/) based architecture using [@ngrx/Store](https://github.com/ngrx/store) for a reactive state managment.
- [@ngrx/SideEffects](https://github.com/ngrx/effects) to handle Rx Side Effects
- [Typescript2](https://www.typescriptlang.org/) and ES6 transpilation using [Typescript2](https://www.typescriptlang.org/)
- [Webpack2](https://webpack.github.io/) for the development/production build toolchain
- Separate build configurations depending on target environment
- [Webpack DLL](https://github.com/webpack/docs/wiki/list-of-plugins#dllplugin) that speed development builds.
- Development & Production server using [express](https://github.com/expressjs/express) and [webpack-dev-server](https://webpack.github.io/)
- Hot Reload/Live Reload support for Js & Css using  [Webpack2 HMR](https://webpack.github.io/docs/hot-module-replacement.html)
- [Mocha](https://mochajs.org/) as testing framework
- [Chai](http://chaijs.com/) as assertion library
- [Jsdom](https://github.com/tmpvar/jsdom) as Whatwg Dom implementation.
- [Nyc](https://github.com/bcoe/nyc) for code coverage
- [CssModules](https://github.com/css-modules/css-modules) based
- Code Linting using [TsLint](https://palantir.github.io/tslint/)
- Css Linting using [CssLint](https://github.com/stylelint/stylelint)
- Baked in best-practices of [Angular Style Guide](https://angular.io/styleguide)


## Getting Started

To get you started, you need to meet the prerequisites, and then follow the installation instructions.

### Prerequisites

Angular-Base makes use a number of NodeJS tools to initialize and test Angular-Base. You must have node.js 6.0.0 at least, and its package manager (npm) installed. You can get it from [nodejs.org](node).

### Installing

You can clone our Git repository:

`$ git clone https://github.com/atSistemas/Angular-Base.git`

This method requires Git to be installed on your computer. You can get it from
[here](http://git-scm.com).

### Wiring up your development environment

Setting up **Angular-Base** is as easy as running:

`$ yarn install`

This command will install all the required dependencies and start your development server, which takes care of all the changes you make to your code and runs all the awesome stuff that ends with your code automagically transpiled and running on your browser.

Please note that `yarn install` is only required on your first start, or in case of updated dependencies.


### Initializing development server

  Once all the dependencies are installed, you can run `$ yarn start` to initialize your development server using [webpack-dev-server](https://webpack.github.io/) express middleware.

  The dev server uses  [HMR](https://webpack.github.io/docs/hot-module-replacement.html) (Hot module replacement) that injects updated modules into the bundle in runtime. It's like LiveReload


## Architecture

Angular-Base is based on [Redux](http://redux.js.org/)  paradigm so you can find all the typical entities of an Redux project like [reducers](http://redux.js.org/docs/basics/Reducers.html) , [store](http://redux.js.org/docs/basics/Store.html), [actions](http://redux.js.org/docs/basics/Actions.html) , etc.

There are four main folders:

* `server` contains Angular-Base development & production server based in express with custom middlewares like Gzip.

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

* `webpack` contains Angular-Base Webpack2 configuration separated by enviroment that allows to use different plugins and loaders in each target enviroment.

```javascript
webpack
  webpack.common.config/ //Common config
  webpack.dev.config/ //Development config
  webpack.prod.config/ //Production config
  webpack.test.config/ //Testing config
  webpack.dll.config/ //Dll config
```

* `src/base/` contains Angular-Base platform bootstrapping code.

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

Angular-Base uses a "featured based" distribution, so all the necessary code for each page/features is located in its own folder inside containers folder as in `src/app/containers/myContainer`

A container is an Angular Module who contains other components, Redux entities, functions and store subscriptions. Each container is self-contained and represents a feature like "clients" or "products" and it contains all the necessary stuff.
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
export const ActionTypes = createActionTypes([
  'USER_CLICK',
  'MAIN_CONTAINER',
  'MAIN_ERROR',
  'MAIN_REQUEST',
  'MAIN_SUCCESS',
  'LAZY_CONTAINER',
  'LOGIN',
]);
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
Reducers describe how the state of your application changes in response to a new Action. Angular uses a custom CreateReducer that allows to use separated reducers functions instead of "switch based" reducers.

```javascript
const click = (state, action) => {
  return state.update('mainData', (value) => action.payload);
};

const request = (state, action) => {
  return state;
};

const actionHandler: Map<string, any> = new Map<string, any>([
  [ActionTypes.CLICK, click],
  [ActionTypes.LOGIN, login],
  [ActionTypes.MAIN_REQUEST, request],
  [ActionTypes.MAIN_SUCCESS, success]
]);

export function MainReducer(state: MainModelInterface = MainModelInterface, action: Action) {
  const handler = actionHandler.get(action.type);
  return handler ? handler(state, action) : state;
}

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
export interface State {
  lazy: Lazy;
  calculator: Calculator;
  weather: Record<Weather>;
  router: RouterReducerState<any>;
}

//Allows different plugins and middleware for development or production

export const metaReducers: any[] = (ENV !== 'development') ? [] : [
  logger,
  storeFreeze
];

export const StoreModuleImport =
  StoreModule.forRoot(reducers, {
    initialState,
    metaReducers
  });

if (ENV === 'development') {
  baseImports.push(...[
    storeDevtools()
  ]);
}

```

The store is an Observable so you can subscribe to it using select method:


```javascript
export class DisplayComponent {
  private display$: Observable<number | string> = this.store.select(selectDisplay);
  private displaySubscription: Subscription;

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.displaySubscription = this.display$.subscribe(selected => (
      this.display = selected
    ));
  }

  // Do not forget unsubscribe your subscriptions 
  ngOnDestroy() {
    this.displaySubscription.unsubscribe();
  }
}

```

Angular Async Pipe allows you to unwrap/unsubscribe from an Observer when it returns his lastest value:

```javascript
@Component({
  selector: 'client-name',
  template: '<div><code>clientName|async</code>: clientName: {{ clientName | async }}</div>'
})

```

### Regenerating indexes

You can rebuild the file indexes (reducers, models and routes) running `$ yarn regenerate`

## Distribution

You can generate a complete distribution source ready for production enviroment. It uses Three shaking and AOT mode wichs improves rendering and reduce build sizes.

### Building your application

`$ yarn build` will create a minified version for your application, ready for production.

### Running production server

`$ yarn start:prod` will run production enviroment of your application serving content from dist directory.


## Testing your application

Angular-Base base uses - [Jsdom](https://github.com/tmpvar/jsdom) a Javascript implementation of Whatwg Dom and Html Standards using NodeJs.
- [Mocha](https://mochajs.org/) as testing framework
- [Chai](http://chaijs.com/) as assertion library
You can write your tests normally using Mocha and Chai for assertions.

In the starter-template, tests are placed in a `spec/` directory.  
The test runner will run all tests in `*.spec.ts` files.  
Various tests have already been implemented, so you can find some examples in the source code.  


### Running your tests

`$ yarn test` will perform your unit testing, or npm test:coverage to run your tests and display a code coverage report.

### Generating code coverage

Angular-Base uses [Nyc](https://github.com/bcoe/nyc) for code coverage and you can generate reports in console or icov/html format.

`$ yarn test` will perform your code coverage, generating an html report located in coverage/ folder.

## Contributing

Anyone and everyone is welcome to contribute, however, if you decide to get involved, please take a moment to review the [guidelines](CONTRIBUTING.md):

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)

## License

**Angular-Base** is available under the [MIT license](LICENSE).

