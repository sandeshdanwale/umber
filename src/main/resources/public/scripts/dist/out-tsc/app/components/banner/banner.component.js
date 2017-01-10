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
import { CityService } from '../../services/city.service';
import { User } from '../../models/aggregate/user.model';
export var BannerComponent = (function () {
    function BannerComponent(cityService) {
        this.cityService = cityService;
        this.cities = this.cityService.city;
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(), 
        __metadata('design:type', User)
    ], BannerComponent.prototype, "user", void 0);
    BannerComponent = __decorate([
        Component({
            selector: 'banner',
            templateUrl: 'banner.component.html',
            styleUrls: ['banner.component.scss']
        }), 
        __metadata('design:paramtypes', [CityService])
    ], BannerComponent);
    return BannerComponent;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/components/banner/banner.component.js.map