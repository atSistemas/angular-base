/* tslint:disable */

export class nodePathReplacePlugin {
  constructor() {}

  public apply(compiler) {
    this.setModuleConstant(compiler, '__filename', (module) => module.resource);
    this.setModuleConstant(compiler, '__dirname', (module) =>  module.context);
  }

  private setModuleConstant = (compiler, expressionName, fn) =>  {
    compiler.plugin('compilation', (compilation, params) => {
      params.normalModuleFactory.plugin('parser', (parser, parserOptions) => {
        parser.plugin('expression ' + expressionName, function ()  {
          this.state.current.addVariable(expressionName, JSON.stringify(fn(this.state.module)));
          return true;
        });
      });
    });
  }
}