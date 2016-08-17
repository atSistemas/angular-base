const ENV = process.env.NODE_ENV || "production";
process.env['NODE_ENV'] = ENV;

const base = require('../../.base');

let config;

if (ENV === 'development') {
    var nodemon = require('nodemon');

    nodemon({
        "script": 'server/bootstrap/development.js',
        "restartable": "rs",
        "ignore": [
            ".git",
            "node_modules/**/node_modules"
        ],
        "verbose": true,
        "execMap": {
            "js": "node"
        },
        "watch": [
            "server/**/*.*"
        ],
        "env": {
            "NODE_ENV": "development"
        },
        "ext": "js ts json"
    });

    nodemon.on('start', function () {

    }).on('quit', function () {
        base.console.info("Development server has exited");
    }).on('restart', function (files) {
        console.log(base.console.symbols.CR);
        base.console.info('Restarting server due to changes on the following files:' + base.console.symbols.CR);
        if (Array.isArray(files)) {
            files.forEach((file) => console.log(`    ${file}`));
        } else {
            console.log(`    ${files}`);
        }
        console.log(base.console.symbols.CR);
    });

    config = nodemon.config;
} else {
    config = require(`./${ENV}`);
}

module.exports = config;