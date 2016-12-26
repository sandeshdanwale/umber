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
import { SearchDetailPanel } from '../../../../../models/aggregate/ui.model';
export var ResultDetailsComponent = (function () {
    function ResultDetailsComponent() {
    }
    ResultDetailsComponent.prototype.ngOnInit = function () {
        console.log('resultdetails');
    };
    __decorate([
        Input(), 
        __metadata('design:type', SearchDetailPanel)
    ], ResultDetailsComponent.prototype, "activeSearchDetailPanel", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], ResultDetailsComponent.prototype, "properties", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], ResultDetailsComponent.prototype, "landmarks", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], ResultDetailsComponent.prototype, "developers", void 0);
    ResultDetailsComponent = __decorate([
        Component({
            selector: 'result-details',
            templateUrl: 'resultDetails.component.html',
            styleUrls: ['resultDetails.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], ResultDetailsComponent);
    return ResultDetailsComponent;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/components/search/result/details/resultDetails/resultDetails.component.js.map