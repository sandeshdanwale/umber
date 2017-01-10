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
import { DeveloperService } from '../../../../services/developer.service';
export var DeveloperCardCarouselComponent = (function () {
    function DeveloperCardCarouselComponent(developerService) {
        this.developerService = developerService;
        this.topDevelopers = [];
    }
    DeveloperCardCarouselComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.developerService.getTopDevelopers()
            .subscribe(function (topDevelopers) {
            _this.topDevelopers = topDevelopers;
        }, function (topDevelopers) {
            _this.topDevelopers = topDevelopers;
        });
    };
    DeveloperCardCarouselComponent = __decorate([
        Component({
            selector: 'developerCardCarousel',
            templateUrl: 'developerCardCarousel.component.html',
            styleUrls: ['developerCardCarousel.component.scss']
        }), 
        __metadata('design:paramtypes', [DeveloperService])
    ], DeveloperCardCarouselComponent);
    return DeveloperCardCarouselComponent;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/components/bottomSection/developer/developerCardCarousel/developerCardCarousel.component.js.map