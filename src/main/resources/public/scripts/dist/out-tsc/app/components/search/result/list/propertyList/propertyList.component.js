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
import { UiService } from '../../../../../services/ui.service';
export var PropertyListComponent = (function () {
    function PropertyListComponent(uiService) {
        this.uiService = uiService;
        this.header = "Featured Properties";
        this.context = 'property';
    }
    PropertyListComponent.prototype.ngOnInit = function () {
    };
    PropertyListComponent.prototype.updatePropertyDetailPanel = function (property) {
        if (property) {
            this.uiService.updateSearchDetailPanel(property.id.registrationId, this.context);
        }
    };
    PropertyListComponent.prototype.getHighlightText = function (property) {
        if (!property || !property.name || !this.searchString)
            return '';
        return property.name.slice(0, this.searchString.length);
    };
    PropertyListComponent.prototype.getNormalText = function (property) {
        if (!property || !property.name)
            return '';
        if (!this.searchString)
            return this.uiService.capitalize(property.name);
        var str = property.name.slice(this.searchString.length, property.name.length);
        return this.uiService.format(str);
    };
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], PropertyListComponent.prototype, "properties", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], PropertyListComponent.prototype, "searchString", void 0);
    PropertyListComponent = __decorate([
        Component({
            selector: 'property-list',
            templateUrl: 'propertyList.component.html',
            styleUrls: ['propertyList.component.scss']
        }), 
        __metadata('design:paramtypes', [UiService])
    ], PropertyListComponent);
    return PropertyListComponent;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/components/search/result/list/propertyList/propertyList.component.js.map