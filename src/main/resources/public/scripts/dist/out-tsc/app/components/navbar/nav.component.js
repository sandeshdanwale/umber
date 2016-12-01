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
import { UserPreferenceService } from '../../services/userPreference.service';
export var NavComponent = (function () {
    function NavComponent(userPreferenceService) {
        this.userPreferenceService = userPreferenceService;
        this.preference = {};
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userPreferenceService.getUserPreferences(null)
            .subscribe(function (preference) {
            _this.preference = preference;
        }, function (preference) {
            _this.preference = preference;
        });
    };
    NavComponent = __decorate([
        Component({
            selector: 'navbar',
            templateUrl: 'nav.component.html',
            styleUrls: ['nav.component.scss']
        }), 
        __metadata('design:paramtypes', [UserPreferenceService])
    ], NavComponent);
    return NavComponent;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/components/navbar/nav.component.js.map