const System = require('systemjs');
const config = require('../../system-config.json');

// TODO: APPLY BUILD STARTUP CONFIGURATION

const config = {
    baseURL: './',
    defaultJSExtensions: true,
    transpiler: 'typescript',
    typescriptOptions: {
        'tsconfig': true
    },
    packages: {
        'typescript': {
            'meta': {
                'lib/typescript.js': {
                    'exports': 'ts'
                }
            }
        },
        'server': {
            'main': 'server',
            'format': 'system',
            'defaultExtension': 'ts',
            'meta': {
                '*.ts': {
                    'loader': 'ts'
                }
            }
        }
    },
    map: {
        //'ts': 'plugin-typescript',
        'typescript': 'typescript',
        'express': '@empty'
    },
    packageConfigPaths: ['./node_modules/*/package.json'],
    paths: {
        '*': './node_modules/*',
        'tsconfig.json': './tsconfig.json',
        'server': './server',

    }
};

System.config(config);

System.import('server').then(function (module) {
    console.log('[BASE] Server application initialized...');
}).catch(function (error) {
    setTimeout(function () {
        throw error;
    }, 0);
});
