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
export var LandmarkListComponent = (function () {
    function LandmarkListComponent(uiService) {
        this.uiService = uiService;
        this.header = "Popular Landmarks";
        this.context = 'landmark';
    }
    LandmarkListComponent.prototype.ngOnInit = function () {
    };
    LandmarkListComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
    };
    LandmarkListComponent.prototype.updateLandmarkDetailPanel = function (landmark) {
        if (landmark) {
            this.uiService.updateSearchDetailPanel(landmark.id.registrationId, this.context);
        }
    };
    LandmarkListComponent.prototype.getHighlightText = function (landmark) {
        if (!landmark || !landmark.name || !this.searchString)
            return '';
        return landmark.name.slice(0, this.searchString.length);
    };
    LandmarkListComponent.prototype.getNormalText = function (landmark) {
        if (!landmark || !landmark.name)
            return '';
        if (!this.searchString)
            return this.uiService.capitalize(landmark.name);
        var str = landmark.name.slice(this.searchString.length, landmark.name.length);
        return this.uiService.format(str);
    };
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], LandmarkListComponent.prototype, "landmarks", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], LandmarkListComponent.prototype, "searchString", void 0);
    LandmarkListComponent = __decorate([
        Component({
            selector: 'landmark-list',
            templateUrl: 'landmarkList.component.html',
            styleUrls: ['landmarkList.component.scss']
        }), 
        __metadata('design:paramtypes', [UiService])
    ], LandmarkListComponent);
    return LandmarkListComponent;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/components/search/result/list/landmarkList/landmarkList.component.js.map