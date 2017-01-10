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
import { Property } from '../../../models/aggregate/property.model';
export var PropertyCardVsmallComponent = (function () {
    function PropertyCardVsmallComponent() {
    }
    PropertyCardVsmallComponent.prototype.ngOnInit = function () {
        this.style = 'url(/assets/images/logo.jpg)';
    };
    PropertyCardVsmallComponent.prototype.ngOnChanges = function () {
        this.style = 'url(/assets/images/logo.jpg)';
    };
    Object.defineProperty(PropertyCardVsmallComponent.prototype, "displayPropertyName", {
        get: function () {
            return this.property ? this.property.name : '';
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(), 
        __metadata('design:type', Property)
    ], PropertyCardVsmallComponent.prototype, "property", void 0);
    PropertyCardVsmallComponent = __decorate([
        Component({
            selector: 'property-card-very-small',
            templateUrl: 'propertyCardVsmall.component.html',
            styleUrls: ['propertyCardVsmall.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], PropertyCardVsmallComponent);
    return PropertyCardVsmallComponent;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/components/shared/propertyCardVsmall/propertyCardVsmall.component.js.map