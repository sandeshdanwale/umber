var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Pipe } from '@angular/core';
import * as _ from 'lodash';
export var OrderByPipe = (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (array, args) {
        if (!array)
            return array;
        return _.sortBy(array, function (p) { return p && p.name; });
    };
    OrderByPipe = __decorate([
        Pipe({
            name: "orderBy"
        }), 
        __metadata('design:paramtypes', [])
    ], OrderByPipe);
    return OrderByPipe;
}());
export var ActiveLandmarkPipe = (function () {
    function ActiveLandmarkPipe() {
    }
    ActiveLandmarkPipe.prototype.transform = function (landmarks, activeSearchDetailPanel) {
        if (!landmarks)
            return;
        if (!activeSearchDetailPanel || activeSearchDetailPanel.name !== 'landmark')
            return;
        return _.head(_.filter(landmarks, function (l) { return l.id.registrationId === activeSearchDetailPanel.entityId; }));
    };
    ActiveLandmarkPipe = __decorate([
        Pipe({
            name: "activeLandmarkPipe"
        }), 
        __metadata('design:paramtypes', [])
    ], ActiveLandmarkPipe);
    return ActiveLandmarkPipe;
}());
export var ActiveDeveloperPipe = (function () {
    function ActiveDeveloperPipe() {
    }
    ActiveDeveloperPipe.prototype.transform = function (developers, activeSearchDetailPanel) {
        if (!developers)
            return;
        if (!activeSearchDetailPanel || activeSearchDetailPanel.name !== 'developer')
            return;
        return _.head(_.filter(developers, function (d) { return d.id.registrationId === activeSearchDetailPanel.entityId; }));
    };
    ActiveDeveloperPipe = __decorate([
        Pipe({
            name: "activeDeveloperPipe"
        }), 
        __metadata('design:paramtypes', [])
    ], ActiveDeveloperPipe);
    return ActiveDeveloperPipe;
}());
export var ActivePropertyPipe = (function () {
    function ActivePropertyPipe() {
    }
    ActivePropertyPipe.prototype.transform = function (properties, activeSearchDetailPanel) {
        if (!properties)
            return;
        if (!activeSearchDetailPanel || activeSearchDetailPanel.name !== 'property')
            return;
        return _.head(_.filter(properties, function (p) { return p.id.registrationId === activeSearchDetailPanel.entityId; }));
    };
    ActivePropertyPipe = __decorate([
        Pipe({
            name: "activePropertyPipe"
        }), 
        __metadata('design:paramtypes', [])
    ], ActivePropertyPipe);
    return ActivePropertyPipe;
}());
export var DisplayViewport = (function () {
    function DisplayViewport() {
    }
    DisplayViewport.prototype.transform = function (properties, viewPort) {
        return _.slice(properties, 0, viewPort);
    };
    DisplayViewport = __decorate([
        Pipe({
            name: "displayViewport"
        }), 
        __metadata('design:paramtypes', [])
    ], DisplayViewport);
    return DisplayViewport;
}());
export var DisplayConfig = (function () {
    function DisplayConfig() {
    }
    DisplayConfig.prototype.transform = function (config) {
        return config;
    };
    DisplayConfig = __decorate([
        Pipe({
            name: "displayConfig"
        }), 
        __metadata('design:paramtypes', [])
    ], DisplayConfig);
    return DisplayConfig;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/pipes/generic.pipe.js.map