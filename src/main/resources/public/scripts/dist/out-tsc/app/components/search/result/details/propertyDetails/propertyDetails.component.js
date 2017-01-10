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
import { Property } from '../../../../../models/aggregate/property.model';
export var PropertyDetailsComponent = (function () {
    function PropertyDetailsComponent() {
    }
    PropertyDetailsComponent.prototype.ngOnInit = function () {
    };
    PropertyDetailsComponent.prototype.ngOnChanges = function () {
    };
    __decorate([
        Input(), 
        __metadata('design:type', Property)
    ], PropertyDetailsComponent.prototype, "property", void 0);
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