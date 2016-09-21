const console = require('../console');

module.exports = function CompileErrorPlugin() {
    return function () {
        this.plugin("done", function (stats) {
            if (stats.compilation.errors && stats.compilation.errors.length && process.argv.indexOf('--watch') == -1) {
                console.error(stats.compilation.errors);
            }
        });
    }
}