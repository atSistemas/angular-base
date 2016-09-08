const console = require('./console');
const timer = require('./timer');
const ProgressBar = require('./webpack/progress-bar-plugin');
const CompileErrors = require('./webpack/compile-errors-plugin');

module.exports = {
    console: console,
    timer: timer,
    webpack: {
        ProgressBarPlugin: ProgressBar,
        CompileErrorsPlugin: CompileErrors
    }
};