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
import { Response } from '@angular/http';
export var UserPreferenceService = (function () {
    function UserPreferenceService(http) {
        this.http = http;
        this.BASE_URL = location.hostname === 'localhost' ? '' : '';
    }
    UserPreferenceService.prototype.getUserPreferences = function (userId) {
        var url = this.BASE_URL + "/userPreference?userId=null";
        return this.http.get(url)
            .map(this.extractData);
        //.catch(this.handleError);
    };
    UserPreferenceService.prototype.extractData = function (res) {
        var data;
        try {
            data = res.json();
            return data;
        }
        catch (e) {
            return { "primaryLocations": [{ "locationId": { "registrationId": "1" }, "rank": 1, "name": "mumbai", "primary": true }, { "locationId": { "registrationId": "9" }, "rank": 9, "name": "pune", "primary": true }, { "locationId": { "registrationId": "3" }, "rank": 3, "name": "bangalore", "primary": true }, { "locationId": { "registrationId": "5" }, "rank": 5, "name": "hyderabad", "primary": true }], "secondaryLocations": [{ "locationId": { "registrationId": "26" }, "rank": 26, "name": "nashik", "primary": false }, { "locationId": { "registrationId": "2" }, "rank": 2, "name": "delhi", "primary": false }], "selectedLocation": { "locationId": { "registrationId": "9" }, "rank": 9, "name": "pune", "primary": true } };
        }
    };
    UserPreferenceService.prototype.handleError = function (error) {
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
        return Observable.throw(errMsg);
    };
    UserPreferenceService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [HttpService])
    ], UserPreferenceService);
    return UserPreferenceService;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/services/userPreference.service.js.map