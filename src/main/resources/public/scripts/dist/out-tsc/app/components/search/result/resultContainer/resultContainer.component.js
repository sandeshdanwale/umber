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
import { UiService } from '../../../../services/ui.service';
import { PropertyService } from '../../../../services/property.service';
import { LocationService } from '../../../../services/location.service';
import { DeveloperService } from '../../../../services/developer.service';
export var ResultContainerComponent = (function () {
    function ResultContainerComponent(propertyService, locationService, developerService, uiService) {
        this.propertyService = propertyService;
        this.locationService = locationService;
        this.developerService = developerService;
        this.uiService = uiService;
        this.properties = this.propertyService.property;
        this.locations = this.locationService.location;
        this.developers = this.developerService.developer;
        this.activeSearchDetailPanel = this.uiService.activeSearchDetailPanel;
    }
    ResultContainerComponent = __decorate([
        Component({
            selector: 'result-container',
            templateUrl: 'resultContainer.component.html',
            styleUrls: ['resultContainer.component.scss']
        }), 
        __metadata('design:paramtypes', [PropertyService, LocationService, DeveloperService, UiService])
    ], ResultContainerComponent);
    return ResultContainerComponent;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/components/search/result/resultContainer/resultContainer.component.js.map