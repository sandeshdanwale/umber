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
import * as _ from 'lodash';
export var PropertyCardMediumComponent = (function () {
    function PropertyCardMediumComponent() {
    }
    PropertyCardMediumComponent.prototype.ngOnInit = function () {
        this.initDisplayProperty();
        this.style = 'url(/assets/images/logo.jpg)';
    };
    PropertyCardMediumComponent.prototype.ngOnChanges = function () {
        this.initDisplayProperty();
        this.style = 'url(/assets/images/logo.jpg)';
    };
    PropertyCardMediumComponent.prototype.initDisplayProperty = function () {
        if (!this.displayProperty) {
            this.displayProperty = new DisplayProperty();
        }
        this.displayProperty.address = this.getDisplayAddress();
        this.displayProperty.configs = this.getDisplayConfigs();
        this.displayProperty.price = this.getDisplayPrice();
        this.displayProperty.name = this.getDisplayPropertyName();
        this.displayProperty.developerName = this.getDisplayDeveloperName();
    };
    PropertyCardMediumComponent.prototype.mapToCurrencyString = function (price) {
        var displayPrice = '';
        var min = _.round((Number(price) / 100000), 1);
        if (min > 100) {
            min = _.round(min / 100, 1);
            displayPrice += min + 'Cr';
        }
        else {
            displayPrice += min + 'L';
        }
        return displayPrice;
    };
    PropertyCardMediumComponent.prototype.getDisplayPrice = function () {
        var displayPrice = '';
        if (this.property && this.property.configs) {
            var minVal = _.minBy(this.property.configs.configs, function (c) { return c.basePrice; });
            var maxVal = _.maxBy(this.property.configs.configs, function (c) { return c.basePrice; });
            if (minVal) {
                displayPrice += this.mapToCurrencyString(minVal.basePrice);
            }
            if (maxVal) {
                if (minVal) {
                    displayPrice += ' - ';
                }
                displayPrice += this.mapToCurrencyString(maxVal.basePrice);
            }
        }
        return displayPrice;
    };
    PropertyCardMediumComponent.prototype.getDisplayPropertyName = function () {
        return this.property ? this.property.name : '';
    };
    PropertyCardMediumComponent.prototype.getDisplayDeveloperName = function () {
        return this.property ? this.property.developerName : '';
    };
    PropertyCardMediumComponent.prototype.getDisplayConfigs = function () {
        var is1BHK = false;
        var is2BHK = false;
        var is3BHK = false;
        var isRowhouse = false;
        var displayConfig = '';
        if (this.property && this.property.configs) {
            _.forEach(this.property.configs.configs, function (c) {
                if (c.type === '1bhk')
                    is1BHK = true;
                if (c.type === '2bhk')
                    is2BHK = true;
                if (c.type === '3bhk')
                    is3BHK = true;
                if (c.type === 'rowhouse')
                    isRowhouse = true;
            });
        }
        if (is1BHK)
            displayConfig += '1';
        if (is2BHK)
            displayConfig += !is1BHK ? '2' : ', 2';
        if (is3BHK)
            displayConfig += !is1BHK && !is2BHK ? '3' : ', 3';
        if (is1BHK || is2BHK || is3BHK)
            displayConfig += ' BHK Apartments';
        if (isRowhouse)
            displayConfig += !is1BHK && !is2BHK && !is3BHK ? 'RowHouses' : ', RowHouses';
        return displayConfig;
    };
    PropertyCardMediumComponent.prototype.getDisplayAddress = function () {
        var address = _.head(_.filter(this.property.addresses, function (p) { return p.type.toString() === 'HOME'; }));
        if (address) {
            var lines = '';
            lines = !address.line1 ? lines : lines ? lines + ', ' + address.line1 : address.line1;
            lines = !address.line2 ? lines : lines ? lines + ', ' + address.line2 : address.line2;
            lines = !address.line3 ? lines : lines ? lines + ', ' + address.line3 : address.line3;
            var txt = lines + ', ' + address.city + ', ' + address.state;
            return txt.length > 35 ? txt.slice(0, 35) + ' ...' : txt;
        }
        return '';
    };
    __decorate([
        Input(), 
        __metadata('design:type', Property)
    ], PropertyCardMediumComponent.prototype, "property", void 0);
    PropertyCardMediumComponent = __decorate([
        Component({
            selector: 'property-card-medium',
            templateUrl: 'propertyCardMedium.component.html',
            styleUrls: ['propertyCardMedium.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], PropertyCardMediumComponent);
    return PropertyCardMediumComponent;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/components/shared/propertyCardMedium/propertyCardMedium.component.js.map