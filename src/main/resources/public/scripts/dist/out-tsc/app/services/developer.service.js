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
import { HttpService } from './http.service';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import { Response } from '@angular/http';
export var DeveloperService = (function () {
    function DeveloperService(http, store) {
        this.http = http;
        this.store = store;
        this.BASE_URL = location.hostname === 'localhost' ? '' : '';
        this.developer = store.let(fromRoot.getDeveloperEntities);
    }
    DeveloperService.prototype.getDevelopers = function (cityId, searchString) {
        if (!searchString) {
            return this.getFeaturedDevelopers(cityId);
        }
        var url = this.BASE_URL + "/developer/search/" + cityId + "/" + searchString;
        return this.http.get(url)
            .map(this.extractData);
    };
    DeveloperService.prototype.getDeveloperDetails = function (id) {
        var url = this.BASE_URL + "/developer/details/" + id;
        return this.http.get(url)
            .map(this.extractData);
    };
    DeveloperService.prototype.getTopDevelopers = function () {
        var url = this.BASE_URL + "/developer/topDevelopers";
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DeveloperService.prototype.getFeaturedDevelopers = function (cityId) {
        var url = this.BASE_URL + "/developer/featuredDevelopersByCity?cityId=" + cityId;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DeveloperService.prototype.extractData = function (res) {
        var data;
        try {
            data = res.json();
            return data;
        }
        catch (e) {
            return [{
                    developerName: "shiv"
                }, {
                    developerName: "mahindra"
                }, {
                    developerName: "sobha"
                }, {
                    developerName: "shubh-laxmi"
                }, {
                    developerName: "radius"
                }];
        }
    };
    DeveloperService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        //return Observable.throw(errMsg);
        var res = [{
                developerName: "shiv"
            }, {
                developerName: "mahindra"
            }, {
                developerName: "sobha"
            }, {
                developerName: "shubh-laxmi"
            }, {
                developerName: "radius"
            }];
        Observable.throw(res);
    };
    DeveloperService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [HttpService, Store])
    ], DeveloperService);
    return DeveloperService;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/services/developer.service.js.map