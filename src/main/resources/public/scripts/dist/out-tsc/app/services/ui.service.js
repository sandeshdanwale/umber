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
import * as ui from '../actions/ui.action';
import { Panel } from '../models/aggregate/ui.model';
export var UiService = (function () {
    function UiService(http, store) {
        this.http = http;
        this.store = store;
        this.BASE_URL = location.hostname === 'localhost' ? '' : '';
        this.activePanels = store.let(fromRoot.getActivePanels);
    }
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
        __metadata('design:paramtypes', [HttpService, Store])
    ], UiService);
    return UiService;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/services/ui.service.js.map