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
import { UiService } from '../../../../services/ui.service';
import { PropertyService } from '../../../../services/property.service';
import { LandmarkService } from '../../../../services/landmark.service';
import { DeveloperService } from '../../../../services/developer.service';
import * as _ from 'lodash';
export var ResultContainerComponent = (function () {
    function ResultContainerComponent(propertyService, landmarkService, developerService, uiService) {
        this.propertyService = propertyService;
        this.landmarkService = landmarkService;
        this.developerService = developerService;
        this.uiService = uiService;
        this.isResultDetailListActive = false;
        this.properties = this.propertyService.property;
        this.landmarks = this.landmarkService.landmark;
        this.developers = this.developerService.developer;
        this.activeSearchDetailPanel = this.uiService.activeSearchDetailPanel;
        this.isResultDetailListActive = this.isResultDetailListOpen();
    }
    ResultContainerComponent.prototype.ngOnChanges = function () {
        this.properties = this.propertyService.property;
        this.landmarks = this.landmarkService.landmark;
        this.developers = this.developerService.developer;
        this.activeSearchDetailPanel = this.uiService.activeSearchDetailPanel;
        this.isResultDetailListActive = this.isResultDetailListOpen();
    };
    ResultContainerComponent.prototype.isResultDetailListOpen = function () {
        var detailList = _.head(_.filter(this.activePanels, function (p) { return p.name === 'searchDetailList'; }));
        return detailList && detailList.name;
    };
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], ResultContainerComponent.prototype, "activePanels", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], ResultContainerComponent.prototype, "searchString", void 0);
    ResultContainerComponent = __decorate([
        Component({
            selector: 'result-container',
            templateUrl: 'resultContainer.component.html',
            styleUrls: ['resultContainer.component.scss']
        }), 
        __metadata('design:paramtypes', [PropertyService, LandmarkService, DeveloperService, UiService])
    ], ResultContainerComponent);
    return ResultContainerComponent;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/components/search/result/resultContainer/resultContainer.component.js.map