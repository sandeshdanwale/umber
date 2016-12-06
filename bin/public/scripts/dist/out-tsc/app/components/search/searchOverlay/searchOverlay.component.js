var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { UiService } from '../../../services/ui.service';
import * as _ from 'lodash';
export var SearchOverlayComponent = (function () {
    function SearchOverlayComponent(uiService) {
        this.uiService = uiService;
        //this.activePanels = this.uiService.activePanels;
    }
    SearchOverlayComponent.prototype.ngOnInit = function () {
        console.log(this.activePanels);
    };
    SearchOverlayComponent.prototype.closeSearchOverlay = function () {
        this.uiService.closeSearchOverlay();
    };
    SearchOverlayComponent.prototype.isSearchOverlayOpen = function () {
        var overlay = _.head(_.filter(this.activePanels, function (p) { return p.name === 'searchOverlay'; }));
        return overlay && overlay.name;
    };
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], SearchOverlayComponent.prototype, "activePanels", void 0);
    SearchOverlayComponent = __decorate([
        Component({
            selector: 'search-overlay',
            templateUrl: 'searchOverlay.component.html',
            styleUrls: ['searchOverlay.component.scss'],
            changeDetection: ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [UiService])
    ], SearchOverlayComponent);
    return SearchOverlayComponent;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/components/search/searchOverlay/searchOverlay.component.js.map