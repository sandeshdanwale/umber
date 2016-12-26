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
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { DeveloperService } from './developer.service';
import { PropertyService } from './property.service';
import { LandmarkService } from './landmark.service';
import { CityService } from './city.service';
import { UserService } from './user.service';
import * as city from '../actions/city.action';
import * as developer from '../actions/developer.action';
import * as property from '../actions/property.action';
import * as defaultProperty from '../actions/defaultProperty.action';
import * as landmark from '../actions/landmark.action';
import * as ui from '../actions/ui.action';
import * as user from '../actions/user.action';
import { Panel } from '../models/aggregate/ui.model';
import { User } from '../models/aggregate/user.model';
import { Preference } from '../models/aggregate/preference.model';
import { City } from '../models/aggregate/city.model';
import { UserId } from '../models/aggregate/aggregate.model';
export var AggregationService = (function () {
    function AggregationService(developerService, propertyService, cityService, landmarkService, userService, store) {
        this.developerService = developerService;
        this.propertyService = propertyService;
        this.cityService = cityService;
        this.landmarkService = landmarkService;
        this.userService = userService;
        this.store = store;
    }
    AggregationService.prototype.load = function () {
        var _this = this;
        // move this inside fork join with ui.getactivepanel which return observable
        var panel = new Panel('main');
        var activePanels = [];
        activePanels.push(panel);
        var userId = new UserId('1');
        Observable.forkJoin(this.userService.getUserPreferences('1'), this.cityService.getAllCities()).subscribe(function (data) {
            var selectedCity = new City(data[0].city);
            var cityId = selectedCity.id.registrationId;
            cityId = cityId ? cityId : '9';
            var preference = new Preference({ city: selectedCity
            });
            var serverUser = new User({
                id: data[0].userId.registrationId,
                preference: preference
            });
            _this.store.dispatch(new user.LoadSuccessAction(serverUser));
            _this.store.dispatch(new city.LoadSuccessAction(data[1]));
            Observable.forkJoin(_this.developerService.getFeaturedDevelopers(cityId), _this.propertyService.getFeaturedProperties(cityId), _this.landmarkService.getFeaturedLandmarks(cityId)).subscribe(function (data) {
                _this.store.dispatch(new developer.LoadSuccessAction(data[0].slice(0, 13)));
                _this.store.dispatch(new property.LoadSuccessAction(data[1].slice(0, 13)));
                _this.store.dispatch(new defaultProperty.LoadSuccessAction(data[1].slice(0, 4)));
                _this.store.dispatch(new landmark.LoadSuccessAction(data[2].slice(0, 13)));
                _this.store.dispatch(new ui.LoadSuccessAction(activePanels));
            });
        });
    };
    AggregationService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [DeveloperService, PropertyService, CityService, LandmarkService, UserService, Store])
    ], AggregationService);
    return AggregationService;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/services/aggregation.service.js.map