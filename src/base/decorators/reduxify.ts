import { Action, ReducersMapObject } from 'redux';
import { ReflectiveInjector } from '@angular/core';
import { Store } from '../store';
import { NgRedux } from 'ng2-redux';

export interface reduxifyOptions {
    reducers: ReducersMapObject,
    epics: { [index: string]: string[] },
    store?: string
}

export function BaseReduxify(options: reduxifyOptions) {

    console.log(22222, options);
    return function (target: Function) {

        let BaseReduxify = function () {
            target.apply(this, arguments);
            this.reduxify_init();
        };

        BaseReduxify.prototype = Object.create(target.prototype);
        BaseReduxify.prototype.constructor = target;

        BaseReduxify.prototype.epics = [];

        BaseReduxify.prototype.reduxify = {};

        BaseReduxify.prototype.reduxify_init = function () {

            if (!this.reduxify_checks()) return;
            this.reduxify_mapEpics();
            this.reduxify_mapReducers();
            this.reduxify_reconfigure();
        }

        BaseReduxify.prototype.reduxify_checks = function () {
          console.log(55555, this.store, this[options.store]);
            if (!this.store && !this[options.store]) {
                console.error("You must inject a Redux store to use reduxify decorator");
                return false;
            }
            if (options.epics) {
                for (var key in options.epics) {
                    if (!this[key]) {
                        console.error(`You must inject ${key} injectable to declare an epic for it`);
                        return false;
                    } else {
                        for (var i = 0; i < options.epics[key].length; i++) {
                            if (!this[key][options.epics[key][i]]) {
                                console.error(`${key} doesn't have a method ${options.epics[key][i]}`);
                                return false;
                            }
                        }
                    }
                }
            }
            return true;
        }

        BaseReduxify.prototype.reduxify_mapEpics = function () {
            for (var key in options.epics) {
                this.reduxify_mapEpicMethods(this[key], options.epics[key])
            }

        }

        BaseReduxify.prototype.reduxify_mapEpicMethods = function (service: any, methods: string[]) {
            methods.forEach((method) => this.epics.push(service[method]));
        }

        BaseReduxify.prototype.reduxify_mapReducers = function () {
            this.reducers = options.reducers;
        }

        BaseReduxify.prototype.reduxify_reconfigure = function () {
            this.store.combineReducers(this.reducers);
            this.epics.forEach((epic) => this.store.epic$.next(epic));
        }
        return <any>BaseReduxify;

    }
}
