var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/aggregate/user.model';
import * as _ from 'lodash';
export var NavComponent = (function () {
    function NavComponent(userService) {
        this.userService = userService;
        this.userCity = new EventEmitter();
        this.isOpen = false;
        this.isOpen = false;
    }
    NavComponent.prototype.ngOnInit = function () {
        if (this.user && this.cities && this.cities.length) {
            this.primaryCities =
                _.slice(_.uniqBy(_.union([this.user.preference.city], _.filter(this.cities, function (city) { return city && city.primary; })), function (city) { return city && city.name; }), 0, 4);
            this.secondaryCities = _.difference(this.cities, this.primaryCities);
            this.selectedCity = this.user.preference.city;
        }
    };
    NavComponent.prototype.ngOnChanges = function () {
        if (this.user && this.cities && this.cities.length) {
            this.primaryCities =
                _.slice(_.uniqBy(_.union([this.user.preference.city], _.filter(this.cities, function (city) { return city && city.primary; })), function (city) { return city && city.name; }), 0, 4);
            this.secondaryCities = _.difference(this.cities, this.primaryCities);
            this.selectedCity = this.user.preference.city;
        }
    };
    NavComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.isOpen = !this.isOpen;
    };
    NavComponent.prototype.setCity = function ($event, city) {
        var _this = this;
        this.userService.setCity(this.user, city)
            .subscribe(function (data) {
            _this.userService.updateUserPreference(data);
        });
    };
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], NavComponent.prototype, "cities", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', User)
    ], NavComponent.prototype, "user", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], NavComponent.prototype, "userCity", void 0);
    NavComponent = __decorate([
        Component({
            selector: 'navbar',
            templateUrl: 'nav.component.html',
            styleUrls: ['nav.component.scss']
        }), 
        __metadata('design:paramtypes', [UserService])
    ], NavComponent);
    return NavComponent;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/components/navbar/nav.component.js.map