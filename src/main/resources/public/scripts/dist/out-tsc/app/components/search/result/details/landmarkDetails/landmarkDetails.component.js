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
import { Landmark } from '../../../../../models/aggregate/landmark.model';
export var LandmarkDetailsComponent = (function () {
    function LandmarkDetailsComponent() {
    }
    LandmarkDetailsComponent.prototype.ngOnInit = function () {
    };
    LandmarkDetailsComponent.prototype.ngOnChanges = function () {
    };
    Object.defineProperty(LandmarkDetailsComponent.prototype, "displayLandmark", {
        get: function () {
            var displayLandmark = {
                name: '',
                propertyCount: null
            };
            if (this.landmark) {
                displayLandmark.name = this.landmark.name;
                displayLandmark.propertyCount = 50; //this.landmark.propertyCount;
                this.topDevelopers = this.developers.slice(0, 5);
            }
            return displayLandmark;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(), 
        __metadata('design:type', Landmark)
    ], LandmarkDetailsComponent.prototype, "landmark", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], LandmarkDetailsComponent.prototype, "developers", void 0);
    LandmarkDetailsComponent = __decorate([
        Component({
            selector: 'landmark-details',
            templateUrl: 'landmarkDetails.component.html',
            styleUrls: ['landmarkDetails.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], LandmarkDetailsComponent);
    return LandmarkDetailsComponent;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/components/search/result/details/landmarkDetails/landmarkDetails.component.js.map