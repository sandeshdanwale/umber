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
import { Developer } from '../../../models/aggregate/developer.model';
export var DeveloperCardSmallComponent = (function () {
    function DeveloperCardSmallComponent() {
    }
    DeveloperCardSmallComponent.prototype.ngOnInit = function () {
        this.initDisplayContent();
    };
    DeveloperCardSmallComponent.prototype.ngOnChanges = function () {
        this.initDisplayContent();
    };
    DeveloperCardSmallComponent.prototype.initDisplayContent = function () {
        this.displayDeveloperName = this.getDisplayDeveloperName();
        this.style = 'url(/assets/images/developerlogo.jpg)';
    };
    DeveloperCardSmallComponent.prototype.getDisplayDeveloperName = function () {
        return this.developer ? this.developer.name : '';
    };
    __decorate([
        Input(), 
        __metadata('design:type', Developer)
    ], DeveloperCardSmallComponent.prototype, "developer", void 0);
    DeveloperCardSmallComponent = __decorate([
        Component({
            selector: 'developerCardSmall',
            templateUrl: 'developerCardSmall.component.html',
            styleUrls: ['developerCardSmall.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], DeveloperCardSmallComponent);
    return DeveloperCardSmallComponent;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/components/shared/developerCardSmall/developerCardSmall.component.js.map