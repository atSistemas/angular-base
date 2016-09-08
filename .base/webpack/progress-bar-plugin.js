const console = require('../console');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = function () {
    return new ProgressBarPlugin({
        format: `  [BASE] ${console.color('info', 'i')} Bundling... [:bar] ${console.color('success', ':percent')} (:elapsed seconds)`,
        clear: true,
        summary: false,
    });
}