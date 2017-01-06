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
export var PropertyDetailsComponent = (function () {
    function PropertyDetailsComponent() {
    }
    PropertyDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.properties);
        this.property = this.properties ? _.head(_.filter(this.properties, function (p) { return p.id.registrationId === _this.activeSearchDetailPanel.entityId; })) : null;
    };
    PropertyDetailsComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.property = this.properties ? _.head(_.filter(this.properties, function (p) { return p.id.registrationId === _this.activeSearchDetailPanel.entityId; })) : null;
    };
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], PropertyDetailsComponent.prototype, "properties", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', SearchDetailPanel)
    ], PropertyDetailsComponent.prototype, "activeSearchDetailPanel", void 0);
    PropertyDetailsComponent = __decorate([
        Component({
            selector: 'property-details',
            templateUrl: 'propertyDetails.component.html',
            styleUrls: ['propertyDetails.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], PropertyDetailsComponent);
    return PropertyDetailsComponent;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/components/search/result/details/propertyDetails/propertyDetails.component.js.map