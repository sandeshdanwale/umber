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
export var LocationService = (function () {
    function LocationService(http, store) {
        this.http = http;
        this.store = store;
        this.BASE_URL = location.hostname === 'localhost' ? '' : '';
        this.location = store.let(fromRoot.getLocationEntities);
    }
    LocationService.prototype.getLocationDetails = function (id) {
        var url = this.BASE_URL + "/location/details/" + id;
        return this.http.get(url)
            .map(this.extractData);
    };
    LocationService.prototype.getFeaturedLocations = function () {
        var url = this.BASE_URL + "/location/featuredLocations";
        return this.http.get(url)
            .map(this.extractData);
        //.catch(this.handleError);
    };
    LocationService.prototype.extractData = function (res) {
        var data;
        try {
            data = res.json();
            return data;
        }
        catch (e) {
            return [{ "locationId": { "registrationId": "1" }, "rank": 1, "name": "mumbai", "primary": true, "featured": true }, { "locationId": { "registrationId": "9" }, "rank": 9, "name": "pune", "primary": true, "featured": true }, { "locationId": { "registrationId": "3" }, "rank": 3, "name": "bangalore", "primary": true, "featured": true }, { "locationId": { "registrationId": "5" }, "rank": 5, "name": "hyderabad", "primary": true, "featured": true }];
        }
    };
    LocationService.prototype.handleError = function (error) {
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
        var res = [{ "locationId": { "registrationId": "1" }, "rank": 1, "name": "mumbai", "primary": true, "featured": true }, { "locationId": { "registrationId": "9" }, "rank": 9, "name": "pune", "primary": true, "featured": true }, { "locationId": { "registrationId": "3" }, "rank": 3, "name": "bangalore", "primary": true, "featured": true }, { "locationId": { "registrationId": "5" }, "rank": 5, "name": "hyderabad", "primary": true, "featured": true }];
        return res; //Observable.throw(res);
    };
    LocationService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [HttpService, Store])
    ], LocationService);
    return LocationService;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/services/location.service.js.map