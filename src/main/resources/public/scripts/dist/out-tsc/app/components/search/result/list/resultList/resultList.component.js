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
export var ResultListComponent = (function () {
    function ResultListComponent() {
    }
    ResultListComponent.prototype.ngOnInit = function () {
        console.log('list');
    };
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], ResultListComponent.prototype, "properties", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], ResultListComponent.prototype, "locations", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], ResultListComponent.prototype, "developers", void 0);
    ResultListComponent = __decorate([
        Component({
            selector: 'result-list',
            templateUrl: 'resultList.component.html',
            styleUrls: ['resultList.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], ResultListComponent);
    return ResultListComponent;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/components/search/result/list/resultList/resultList.component.js.map