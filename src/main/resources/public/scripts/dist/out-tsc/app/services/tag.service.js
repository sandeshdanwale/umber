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
import { UiService } from './ui.service';
import * as fromRoot from '../reducers';
import * as tag from '../actions/tag.action';
export var TagService = (function () {
    function TagService(http, uiService, store) {
        this.http = http;
        this.uiService = uiService;
        this.store = store;
        this.tag = store.let(fromRoot.getTagEntities);
    }
    TagService.prototype.removeTag = function (oldTag) {
        this.store.dispatch(new tag.RemoveTagAction(oldTag));
    };
    TagService.prototype.addTag = function (newTag) {
        this.store.dispatch(new tag.AddTagAction(newTag));
    };
    TagService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [HttpService, UiService, Store])
    ], TagService);
    return TagService;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/services/tag.service.js.map