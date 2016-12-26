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
export var CityDetailsComponent = (function () {
    function CityDetailsComponent() {
        this.displayCity = {};
    }
    CityDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.cities);
        this.city = _.head(_.filter(this.cities, function (p) { return p.id.registrationId === _this.activeSearchDetailPanel.entityId; }));
        this.initDisplayCity(this.city);
    };
    CityDetailsComponent.prototype.ngOnChanges = function () {
        var _this = this;
        console.log('changes');
        this.city = _.head(_.filter(this.cities, function (p) { return p.id.registrationId === _this.activeSearchDetailPanel.entityId; }));
        this.initDisplayCity(this.city);
    };
    CityDetailsComponent.prototype.initDisplayCity = function (city) {
        if (city) {
            this.displayCity.name = this.city.name;
            this.displayCity.propertyCount = 50; //this.city.propertyCount;
            this.displayCity.topDevelopers;
            this.topDevelopers = this.developers.slice(0, 5);
        }
    };
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], CityDetailsComponent.prototype, "cities", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], CityDetailsComponent.prototype, "developers", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', SearchDetailPanel)
    ], CityDetailsComponent.prototype, "activeSearchDetailPanel", void 0);
    CityDetailsComponent = __decorate([
        Component({
            selector: 'city-details',
            templateUrl: 'cityDetails.component.html',
            styleUrls: ['cityDetails.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], CityDetailsComponent);
    return CityDetailsComponent;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/components/search/result/details/cityDetails/cityDetails.component.js.map