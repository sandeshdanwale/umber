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
import * as _ from 'lodash';
export var DeveloperDetailsComponent = (function () {
    function DeveloperDetailsComponent() {
    }
    DeveloperDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //onsole.log(this.developers)
        this.developer = this.developers ? _.head(_.filter(this.developers, function (p) { return p.id.registrationId === _this.activeSearchDetailPanel.entityId; })) : null;
        this.setProperties = this.properties ? this.properties.slice(0, 2) : null;
    };
    DeveloperDetailsComponent.prototype.ngOnChanges = function () {
        console.log('changes');
        //this.developer = _.head(_.filter(this.developers, (p) => p.id.registrationId === this.activeSearchDetailPanel.entityId));
    };
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], DeveloperDetailsComponent.prototype, "developers", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], DeveloperDetailsComponent.prototype, "properties", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', SearchDetailPanel)
    ], DeveloperDetailsComponent.prototype, "activeSearchDetailPanel", void 0);
    DeveloperDetailsComponent = __decorate([
        Component({
            selector: 'developer-details',
            templateUrl: 'developerDetails.component.html',
            styleUrls: ['developerDetails.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], DeveloperDetailsComponent);
    return DeveloperDetailsComponent;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/components/search/result/details/developerDetails/developerDetails.component.js.map