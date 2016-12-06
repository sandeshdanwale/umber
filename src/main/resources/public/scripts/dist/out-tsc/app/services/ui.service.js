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
import { LocationService } from './location.service';
import * as fromRoot from '../reducers';
import * as ui from '../actions/ui.action';
import * as property from '../actions/property.action';
import { Panel, SearchDetailPanel } from '../models/aggregate/ui.model';
export var UiService = (function () {
    function UiService(http, propertyService, developerService, locationService, store) {
        this.http = http;
        this.propertyService = propertyService;
        this.developerService = developerService;
        this.locationService = locationService;
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
        if (context === 'location') {
            return this.locationService.getLocationDetails(id);
        }
    };
    UiService.prototype.updateEntityPanel = function (id, context, data) {
        if (context === 'property') {
            var searchDetailPanel = new SearchDetailPanel('property', data.id.registrationId);
            this.store.dispatch(new ui.UpdateSearchDetail(searchDetailPanel));
            this.store.dispatch(new property.UpdatePropertyDetail(data));
        }
        if (context === 'developer') {
            var searchDetailPanel = new SearchDetailPanel('developer', data.id.registrationId);
            this.store.dispatch(new ui.UpdateSearchDetail(searchDetailPanel));
        }
        if (context === 'location') {
            var searchDetailPanel = new SearchDetailPanel('location', data.id.registrationId);
            this.store.dispatch(new ui.UpdateSearchDetail(searchDetailPanel));
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
    UiService.prototype.closeSearchOverlay = function () {
        var activePanels = [];
        activePanels.push(new Panel('main'));
        this.store.dispatch(new ui.LoadSuccessAction(activePanels));
    };
    UiService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [HttpService, PropertyService, DeveloperService, LocationService, Store])
    ], UiService);
    return UiService;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/services/ui.service.js.map