/// <reference path="../../node_modules/@types/jasmine/index.d.ts"/>

import 'reflect-metadata';
import { inject } from  "@angular/core/testing";
//var chai = require('chai');
//var assert = chai.assert;
//var expect = chai.expect;
import { Application } from './application';
import { MainService } from './containers/main/services/main-service';
import * as base from 'base';
import { Store } from 'base';


describe('App Component Test', () =>  {
    it('should pass a dummy test', function () {
        expect(true).toBeTruthy();
    });
});