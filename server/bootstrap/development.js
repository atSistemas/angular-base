module.exports = {
    baseURL: '/',
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
        'ts': 'plugin-typescript',
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
