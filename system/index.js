/// <reference path="../typings/globals/node/index.d.ts" />

const walk = require('fs-walk');
const path = require('path');
const baseConfig = require("./config.base.json");
const bootstrapConfig = require('./config.bootstrap.json');
const moduleConfig = require('./config.module.json');

function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}

function discoverPackages() {
    let packages = {};

    var rootdir = path.resolve(__dirname, '../src');
    var rootdirRegExp = new RegExp(`^${rootdir}\/?`)
    walk.dirsSync(rootdir, (basedir, filename, stat, next) => {
        basedir = basedir.replace(rootdirRegExp, '');
        const modulePath = basedir ? basedir + '/' + filename: filename;
        switch (modulePath) {
            case "app":
                packages[modulePath] = clone(bootstrapConfig);
                break;
            default:
                packages[modulePath] = clone(moduleConfig);
        }
    }, (err) => {
        if (err) console.log(err);
    });

    return packages;

}

const systemConfig = clone(baseConfig);
systemConfig.packages = discoverPackages();

module.exports =  systemConfig;
