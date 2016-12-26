var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { SearchDetailPanel } from '../../../../../models/aggregate/ui.model';
import * as _ from 'lodash';
export var LocationDetailsComponent = (function () {
    function LocationDetailsComponent() {
        this.displayLocation = {};
    }
    LocationDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.locations);
        this.location = _.head(_.filter(this.locations, function (p) { return p.id.registrationId === _this.activeSearchDetailPanel.entityId; }));
        this.initDisplayLocation(this.location);
    };
    LocationDetailsComponent.prototype.ngOnChanges = function () {
        var _this = this;
        console.log('changes');
        this.location = _.head(_.filter(this.locations, function (p) { return p.id.registrationId === _this.activeSearchDetailPanel.entityId; }));
        this.initDisplayLocation(this.location);
    };
    LocationDetailsComponent.prototype.initDisplayLocation = function (location) {
        if (location) {
            this.displayLocation.name = this.location.name;
            this.displayLocation.propertyCount = 50; //this.location.propertyCount;
            this.displayLocation.topDevelopers;
            this.topDevelopers = this.developers.slice(0, 5);
        }
    };
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], LocationDetailsComponent.prototype, "locations", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], LocationDetailsComponent.prototype, "developers", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', SearchDetailPanel)
    ], LocationDetailsComponent.prototype, "activeSearchDetailPanel", void 0);
    LocationDetailsComponent = __decorate([
        Component({
            selector: 'location-details',
            templateUrl: 'locationDetails.component.html',
            styleUrls: ['locationDetails.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], LocationDetailsComponent);
    return LocationDetailsComponent;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/components/search/result/details/locationDetails/locationDetails.component.js.map