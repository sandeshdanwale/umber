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
import { DisplayProperty } from '../../../models/displayProperty.model';
export var PropertyCardComponent = (function () {
    function PropertyCardComponent() {
    }
    PropertyCardComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(PropertyCardComponent.prototype, "displayProperty", {
        get: function () {
            var displayProperty = new DisplayProperty();
            displayProperty.name = this.getDisplayPropertyName();
            displayProperty.description = this.getDisplayPropertyDescription();
            return displayProperty;
        },
        enumerable: true,
        configurable: true
    });
    PropertyCardComponent.prototype.getDisplayPropertyName = function () {
        return this.property ? this.property.name : '';
    };
    PropertyCardComponent.prototype.getDisplayPropertyDescription = function () {
        return this.property ? this.property.description : '';
    };
    __decorate([
        Input(), 
        __metadata('design:type', Property)
    ], PropertyCardComponent.prototype, "property", void 0);
    PropertyCardComponent = __decorate([
        Component({
            selector: 'property-card',
            templateUrl: 'propertyCard.component.html',
            styleUrls: ['propertyCard.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], PropertyCardComponent);
    return PropertyCardComponent;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/components/shared/propertyCard/propertyCard.component.js.map