var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { PropertyService } from '../../../../services/property.service';
export var PropertyCardCarouselComponent = (function () {
    function PropertyCardCarouselComponent(propertyService) {
        this.propertyService = propertyService;
        this.defaultProperties = this.propertyService.defaultProperty;
    }
    PropertyCardCarouselComponent.prototype.ngOnInit = function () {
    };
    PropertyCardCarouselComponent = __decorate([
        Component({
            selector: 'propertyCardCarousel',
            templateUrl: 'propertyCardCarousel.component.html',
            styleUrls: ['propertyCardCarousel.component.scss']
        }), 
        __metadata('design:paramtypes', [PropertyService])
    ], PropertyCardCarouselComponent);
    return PropertyCardCarouselComponent;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/components/bottomSection/property/propertyCardCarousel/propertyCardCarousel.component.js.map