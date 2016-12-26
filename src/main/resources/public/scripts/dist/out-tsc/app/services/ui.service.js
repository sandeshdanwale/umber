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
import { PropertyService } from './property.service';
import { DeveloperService } from './developer.service';
import { LandmarkService } from './landmark.service';
import { CityService } from './city.service';
import * as fromRoot from '../reducers';
import * as ui from '../actions/ui.action';
import * as property from '../actions/property.action';
import * as developer from '../actions/developer.action';
import * as landmark from '../actions/landmark.action';
import { Panel, SearchDetailPanel } from '../models/aggregate/ui.model';
export var UiService = (function () {
    function UiService(http, propertyService, developerService, landmarkService, cityService, store) {
        this.http = http;
        this.propertyService = propertyService;
        this.developerService = developerService;
        this.landmarkService = landmarkService;
        this.cityService = cityService;
        this.store = store;
        this.BASE_URL = location.hostname === 'localhost' ? '' : '';
        this.activePanels = store.let(fromRoot.getActivePanels);
        this.activeSearchDetailPanel = store.let(fromRoot.getActiveSearchDetailPanel);
    }
    UiService.prototype.serachDetailObservable = function (id, context) {
        if (context === 'property') {
            return this.propertyService.getPropertyDetails(id);
        }
        if (context === 'developer') {
            return this.developerService.getDeveloperDetails(id);
        }
        if (context === 'landmark') {
            return this.landmarkService.getLandmarkDetails(id);
        }
    };
    UiService.prototype.updateEntityPanel = function (id, context, data) {
        if (data && data.id) {
            if (context === 'property') {
                var searchDetailPanel = new SearchDetailPanel('property', data.id.registrationId);
                this.store.dispatch(new property.UpdatePropertyDetail(data));
                this.store.dispatch(new ui.UpdateSearchDetail(searchDetailPanel));
            }
            if (context === 'developer') {
                var searchDetailPanel = new SearchDetailPanel('developer', data.id.registrationId);
                this.store.dispatch(new developer.UpdateDeveloperDetail(data));
                this.store.dispatch(new ui.UpdateSearchDetail(searchDetailPanel));
            }
            if (context === 'landmark') {
                var searchDetailPanel = new SearchDetailPanel('landmark', data.id.registrationId);
                this.store.dispatch(new landmark.UpdateLandmarkDetail(data));
                this.store.dispatch(new ui.UpdateSearchDetail(searchDetailPanel));
            }
        }
    };
    UiService.prototype.updateSearchDetailPanel = function (id, context) {
        var _this = this;
        this.serachDetailObservable(id, context)
            .subscribe(function (data) {
            _this.updateEntityPanel(id, context, data);
        });
    };
    UiService.prototype.loadSearchOverlay = function () {
        var activePanels = [];
        activePanels.push(new Panel('main'));
        activePanels.push(new Panel('searchOverlay'));
        this.store.dispatch(new ui.LoadSuccessAction(activePanels));
    };
    UiService.prototype.loadSearchDetailList = function () {
        var activePanels = [];
        activePanels.push(new Panel('main'));
        activePanels.push(new Panel('searchOverlay'));
        activePanels.push(new Panel('searchDetailList'));
        this.store.dispatch(new ui.LoadSuccessAction(activePanels));
    };
    UiService.prototype.closeSearchDetailList = function () {
        var activePanels = [];
        activePanels.push(new Panel('main'));
        activePanels.push(new Panel('searchOverlay'));
        this.store.dispatch(new ui.LoadSuccessAction(activePanels));
    };
    UiService.prototype.closeSearchOverlay = function () {
        var activePanels = [];
        activePanels.push(new Panel('main'));
        this.store.dispatch(new ui.LoadSuccessAction(activePanels));
    };
    UiService.prototype.capitalize = function (str) {
        return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    };
    UiService.prototype.format = function (str) {
        var formattedStr = this.capitalize(str);
        return formattedStr.charAt(0).toLowerCase() + formattedStr.slice(1);
    };
    UiService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [HttpService, PropertyService, DeveloperService, LandmarkService, CityService, Store])
    ], UiService);
    return UiService;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/services/ui.service.js.map