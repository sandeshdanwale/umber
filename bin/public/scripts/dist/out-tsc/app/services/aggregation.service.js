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
import { LocationService } from './location.service';
import * as location from '../actions/location.action';
import * as developer from '../actions/developer.action';
import * as property from '../actions/property.action';
import * as ui from '../actions/ui.action';
import { Panel } from '../models/aggregate/ui.model';
export var AggregationService = (function () {
    function AggregationService(developerService, propertyService, locationService, store) {
        this.developerService = developerService;
        this.propertyService = propertyService;
        this.locationService = locationService;
        this.store = store;
    }
    AggregationService.prototype.load = function () {
        var _this = this;
        // move this inside fork join with ui.getactivepanel which return observable
        var panel = new Panel('main');
        var activePanels = [];
        activePanels.push(panel);
        Observable.forkJoin(this.developerService.getFeaturedDevelopers(), this.propertyService.getFeaturedProperties(), this.locationService.getFeaturedLocations()).subscribe(function (data) {
            _this.store.dispatch(new developer.LoadSuccessAction(data[0]));
            _this.store.dispatch(new property.LoadSuccessAction(data[1]));
            _this.store.dispatch(new location.LoadSuccessAction(data[2]));
            _this.store.dispatch(new ui.LoadSuccessAction(activePanels));
        });
    };
    AggregationService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [DeveloperService, PropertyService, LocationService, Store])
    ], AggregationService);
    return AggregationService;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/services/aggregation.service.js.map