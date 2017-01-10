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
import { Observable } from 'rxjs/Observable';
import * as fromRoot from '../reducers';
import { User } from '../models/aggregate/user.model';
import * as user from '../actions/user.action';
import { City } from '../models/aggregate/city.model';
import { Preference } from '../models/aggregate/preference.model';
import { Response } from '@angular/http';
export var UserService = (function () {
    function UserService(http, store) {
        this.http = http;
        this.store = store;
        this.BASE_URL = location.hostname === 'localhost' ? '' : '';
        this.user = store.let(fromRoot.getUserEntities);
    }
    UserService.prototype.getUserPreferences = function (userId) {
        var url = this.BASE_URL + "/userPreference?userId=" + userId;
        return this.http.get(url)
            .map(this.extractData);
        //.catch(this.handleError);
    };
    UserService.prototype.setCity = function (user, city) {
        var userId = user.id.registrationId;
        var cityId = city.id.registrationId;
        var url = this.BASE_URL + "/userPreference/updateCity?userId=" + userId + "&cityId=" + cityId;
        return this.http.post(url, null)
            .map(this.extractData);
        //.catch(this.handleError);
    };
    UserService.prototype.updateUserPreference = function (serverPreference) {
        var preference = new Preference({ city: new City(serverPreference.city)
        });
        var serverUser = new User({
            id: serverPreference.userId.registrationId,
            preference: preference
        });
        this.store.dispatch(new user.LoadSuccessAction(serverUser));
    };
    UserService.prototype.extractData = function (res) {
        var data;
        try {
            data = res.json();
            return data;
        }
        catch (e) {
            return { "primaryLocations": [{ "locationId": { "registrationId": "1" }, "rank": 1, "name": "mumbai", "primary": true }, { "locationId": { "registrationId": "9" }, "rank": 9, "name": "pune", "primary": true }, { "locationId": { "registrationId": "3" }, "rank": 3, "name": "bangalore", "primary": true }, { "locationId": { "registrationId": "5" }, "rank": 5, "name": "hyderabad", "primary": true }], "secondaryLocations": [{ "locationId": { "registrationId": "26" }, "rank": 26, "name": "nashik", "primary": false }, { "locationId": { "registrationId": "2" }, "rank": 2, "name": "delhi", "primary": false }], "selectedLocation": { "locationId": { "registrationId": "9" }, "rank": 9, "name": "pune", "primary": true } };
        }
    };
    UserService.prototype.handleError = function (error) {
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
    UserService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [HttpService, Store])
    ], UserService);
    return UserService;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/services/user.service.js.map