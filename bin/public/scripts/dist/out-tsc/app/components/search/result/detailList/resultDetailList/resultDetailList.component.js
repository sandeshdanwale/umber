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
export var ResultDetailListComponent = (function () {
    function ResultDetailListComponent() {
    }
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], ResultDetailListComponent.prototype, "properties", void 0);
    ResultDetailListComponent = __decorate([
        Component({
            selector: 'result-detail-list',
            templateUrl: 'resultDetailList.component.html',
            styleUrls: ['resultDetailList.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], ResultDetailListComponent);
    return ResultDetailListComponent;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/components/search/result/detailList/resultDetailList/resultDetailList.component.js.map