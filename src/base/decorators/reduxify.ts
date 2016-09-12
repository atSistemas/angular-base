import { Action, ReducersMapObject } from 'redux';
import { ReflectiveInjector } from '@angular/core';
import { Store } from '../../base';
//import * as base from '../../../.base';
import { NgRedux } from 'ng2-redux';

export interface reduxifyOptions {
    reducers: ReducersMapObject,
    epics: { [index: string]: string[] },
    store?: string
}

function Reduxify(options: reduxifyOptions) {
    return function (target: Function) {

        let Reduxify = function () {
            target.apply(this, arguments);
            this.reduxify_init();
        };

        Reduxify.prototype = Object.create(target.prototype);
        Reduxify.prototype.constructor = target;

        Reduxify.prototype.epics = [];
        
        Reduxify.prototype.reduxify = {};
        
        Reduxify.prototype.reduxify_init = function () {
            
            if (!this.reduxify_checks()) return;
            this.reduxify_mapEpics();
            this.reduxify_mapReducers();
            this.reduxify_reconfigure();
        }

        Reduxify.prototype.reduxify_checks = function () {
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

        Reduxify.prototype.reduxify_mapEpics = function () {
            for (var key in options.epics) {
                this.reduxify_mapEpicMethods(this[key], options.epics[key])
            }

        }

        Reduxify.prototype.reduxify_mapEpicMethods = function (service: any, methods: string[]) {
            methods.forEach((method) => this.epics.push(service[method]));
        }

        Reduxify.prototype.reduxify_mapReducers = function () {
            this.reducers = options.reducers;
        }

        Reduxify.prototype.reduxify_reconfigure = function () {
            this.store.combineReducers(this.reducers);
            this.epics.forEach((epic) => this.store.epic$.next(epic));
        }
        return <any>Reduxify;

    }
}

export default Reduxify;
