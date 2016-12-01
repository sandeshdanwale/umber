var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpService } from './http.service';
import * as fromRoot from '../reducers';
import { Response } from '@angular/http';
export var PropertyService = (function () {
    function PropertyService(http, store) {
        this.http = http;
        this.store = store;
        this.BASE_URL = location.hostname === 'localhost' ? '' : '';
        this.property = store.let(fromRoot.getPropertyEntities);
    }
    PropertyService.prototype.getFeaturedProperties = function () {
        var url = this.BASE_URL + "/property/featuredProperties";
        return this.http.get(url)
            .map(this.extractData);
        //.catch(this.handleError);
    };
    PropertyService.prototype.extractData = function (res) {
        var data;
        try {
            data = res.json();
            return data;
        }
        catch (e) {
            return [{
                    propertyName: "shiv",
                    desc: "Largest and only backward integrated real estate player in the country, Sobha Limited is a big name in the construction industry ..."
                }, {
                    propertyName: "mahindra",
                    desc: "Largest and only backward integrated real estate player in the country, Sobha Limited is a big name in the construction industry ..."
                }, {
                    propertyName: "sobha",
                    desc: "Largest and only backward integrated real estate player in the country, Sobha Limited is a big name in the construction industry ..."
                }];
        }
    };
    PropertyService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        //console.log(errMsg);
        //return Observable.throw(errMsg);
        var res = [{
                propertyName: "shiv",
                desc: "Largest and only backward integrated real estate player in the country, Sobha Limited is a big name in the construction industry ..."
            }, {
                propertyName: "mahindra",
                desc: "Largest and only backward integrated real estate player in the country, Sobha Limited is a big name in the construction industry ..."
            }, {
                propertyName: "sobha",
                desc: "Largest and only backward integrated real estate player in the country, Sobha Limited is a big name in the construction industry ..."
            }];
        return res; //Observable.throw(res);
    };
    PropertyService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [HttpService, Store])
    ], PropertyService);
    return PropertyService;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/services/property.service.js.map