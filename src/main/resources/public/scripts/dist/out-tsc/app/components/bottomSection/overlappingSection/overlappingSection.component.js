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
import { User } from '../../../models/aggregate/user.model';
import { PropertyService } from '../../../services/property.service';
import * as defaultProperty from '../../../actions/defaultProperty.action';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
export var OverlappingSectionComponent = (function () {
    function OverlappingSectionComponent(propertyService, store) {
        this.propertyService = propertyService;
        this.store = store;
    }
    OverlappingSectionComponent.prototype.ngOnInit = function () {
    };
    OverlappingSectionComponent.prototype.ngOnChanges = function (changes) {
        if (changes.user) {
            var prevUser = changes.user.previousValue;
            var curUser = changes.user.currentValue;
            var prevCity = prevUser && prevUser.preference && prevUser.preference.city
                ? prevUser.preference.city.id.registrationId : '';
            var curCity = curUser && curUser.preference && curUser.preference.city
                ? curUser.preference.city.id.registrationId : '';
            if (prevCity !== curCity && prevCity) {
                var city = curUser.preference.city;
                this.handleChange(city);
            }
        }
    };
    OverlappingSectionComponent.prototype.handleChange = function (city) {
        var _this = this;
        var cityId = city.id.registrationId;
        Observable.from(this.propertyService.getFeaturedProperties(cityId)).subscribe(function (data) {
            var defaultProperties = data ? data.slice(0, 4) : null;
            _this.store.dispatch(new defaultProperty.LoadSuccessAction(defaultProperties));
        });
    };
    __decorate([
        Input(), 
        __metadata('design:type', User)
    ], OverlappingSectionComponent.prototype, "user", void 0);
    OverlappingSectionComponent = __decorate([
        Component({
            selector: 'overlappingSection',
            templateUrl: 'overlappingSection.component.html',
            styleUrls: ['overlappingSection.component.scss']
        }), 
        __metadata('design:paramtypes', [PropertyService, Store])
    ], OverlappingSectionComponent);
    return OverlappingSectionComponent;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/components/bottomSection/overlappingSection/overlappingSection.component.js.map