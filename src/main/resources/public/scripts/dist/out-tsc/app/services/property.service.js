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
import { UtilService } from './util.service';
import * as fromRoot from '../reducers';
import { Response } from '@angular/http';
export var PropertyService = (function () {
    function PropertyService(http, utilService, store) {
        this.http = http;
        this.utilService = utilService;
        this.store = store;
        this.BASE_URL = location.hostname === 'localhost' ? '' : '';
        this.property = store.let(fromRoot.getPropertyEntities);
        this.defaultProperty = store.let(fromRoot.getDefaultPropertyEntities);
    }
    PropertyService.prototype.getProperties = function (cityId, searchString) {
        if (cityId === void 0) { cityId = '9'; }
        if (this.utilService.isNull(searchString)) {
            return this.getFeaturedProperties(cityId);
        }
        var url = this.BASE_URL + "/property/search/" + cityId + "/" + searchString;
        return this.http.get(url)
            .map(this.extractData);
    };
    PropertyService.prototype.getPropertiesByLandmark = function (cityId, searchString, landmarkId) {
        if (this.utilService.isNull(searchString)) {
            searchString = 'XXXXX';
        }
        var url = this.BASE_URL + "/property/search/byLandmark/" + landmarkId + "/" + cityId + "/" + searchString;
        return this.http.get(url)
            .map(this.extractData);
    };
    PropertyService.prototype.getPropertiesByDeveloper = function (cityId, searchString, developerId) {
        if (this.utilService.isNull(searchString)) {
            searchString = 'XXXXX';
        }
        var url = this.BASE_URL + "/property/search/byDeveloper/" + developerId + "/" + cityId + "/" + searchString;
        return this.http.get(url)
            .map(this.extractData);
    };
    PropertyService.prototype.getPropertiesByLandmarkAndDeveloper = function (cityId, searchString, landmarkId, developerId) {
        if (this.utilService.isNull(searchString)) {
            searchString = 'XXXXX';
        }
        var url = this.BASE_URL + "/property/search/byLandmarkAndDeveloper/" + landmarkId + "/" + developerId + "/" + cityId + "/" + searchString;
        return this.http.get(url)
            .map(this.extractData);
    };
    PropertyService.prototype.getPropertyDetails = function (id) {
        var url = this.BASE_URL + "/property/details/" + id;
        return this.http.get(url)
            .map(this.extractData);
    };
    PropertyService.prototype.getFeaturedProperties = function (cityId) {
        var url = this.BASE_URL + "/property/featuredPropertiesByCity?cityId=" + cityId;
        return this.http.get(url)
            .map(this.extractData);
        //.catch(this.handleError);
    };
    PropertyService.prototype.extractData = function (res) {
        var data;
        try {
            //if (!res._body) {
            //return data;
            //}
            var _data = res.json();
            return _data;
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
        __metadata('design:paramtypes', [HttpService, UtilService, Store])
    ], PropertyService);
    return PropertyService;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/services/property.service.js.map