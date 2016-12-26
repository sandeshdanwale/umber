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
import { UserService } from '../services/user.service';
import { UiService } from '../services/ui.service';
export var ModalsComponent = (function () {
    function ModalsComponent(uiService, userService) {
        this.uiService = uiService;
        this.userService = userService;
        this.activePanels = this.uiService.activePanels;
        this.user = this.userService.user;
    }
    ModalsComponent = __decorate([
        Component({
            selector: 'modals-container',
            templateUrl: 'modals.component.html',
            styleUrls: ['modals.component.scss']
        }), 
        __metadata('design:paramtypes', [UiService, UserService])
    ], ModalsComponent);
    return ModalsComponent;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/modals/modals.component.js.map