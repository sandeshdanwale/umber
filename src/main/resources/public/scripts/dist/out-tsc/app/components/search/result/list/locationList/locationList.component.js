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
export var LocationListComponent = (function () {
    function LocationListComponent(uiService) {
        this.uiService = uiService;
        this.header = "Popular Localities";
        this.context = 'location';
    }
    LocationListComponent.prototype.ngOnInit = function () {
    };
    LocationListComponent.prototype.updateLocationDetailPanel = function (location) {
        this.uiService.updateSearchDetailPanel(location.id.registrationId, this.context);
    };
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], LocationListComponent.prototype, "locations", void 0);
    LocationListComponent = __decorate([
        Component({
            selector: 'location-list',
            templateUrl: 'locationList.component.html',
            styleUrls: ['locationList.component.scss']
        }), 
        __metadata('design:paramtypes', [UiService])
    ], LocationListComponent);
    return LocationListComponent;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/components/search/result/list/locationList/locationList.component.js.map