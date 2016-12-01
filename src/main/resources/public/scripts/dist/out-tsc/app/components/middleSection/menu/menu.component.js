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
import { CacheService } from '../../../services/cache.service';
export var MenuComponent = (function () {
    function MenuComponent(cacheService) {
        this.cacheService = cacheService;
        this.actions = [];
        this.actions = ["Buy", "Sell", "Rent"];
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.setMode = function (mode) {
        this.cacheService.mode = mode;
    };
    MenuComponent = __decorate([
        Component({
            selector: 'menu-bar',
            templateUrl: 'menu.component.html',
            styleUrls: ['menu.component.scss']
        }), 
        __metadata('design:paramtypes', [CacheService])
    ], MenuComponent);
    return MenuComponent;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/components/middleSection/menu/menu.component.js.map