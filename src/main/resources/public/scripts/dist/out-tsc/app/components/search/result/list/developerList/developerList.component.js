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
import { UiService } from '../../../../../services/ui.service';
import { TagService } from '../../../../../services/tag.service';
import { Tag } from '../../../../../models/aggregate/tag.model';
export var DeveloperListComponent = (function () {
    function DeveloperListComponent(uiService, tagService) {
        this.uiService = uiService;
        this.tagService = tagService;
        this.header = "Top Developers";
        this.context = "developer";
    }
    DeveloperListComponent.prototype.ngOnInit = function () {
    };
    DeveloperListComponent.prototype.updateDeveloperDetailPanel = function (event, developer) {
        if (event) {
            event.stopPropagation();
            event.preventDefault();
        }
        if (developer) {
            this.uiService.updateSearchDetailPanel(developer.id.registrationId, this.context);
        }
    };
    DeveloperListComponent.prototype.addTag = function (event, developer) {
        if (event) {
            event.stopPropagation();
            event.preventDefault();
        }
        console.log(developer);
        if (developer && (!this.tags || this.tags.length < 3)) {
            this.tagService.addTag(new Tag({ type: 'developer', name: developer.name, id: developer.id.registrationId }));
        }
    };
    DeveloperListComponent.prototype.getHighlightText = function (developer) {
        console.log('getHighlightText');
        if (!developer || !developer.name || !this.searchString)
            return '';
        return developer.name.slice(0, this.searchString.length);
    };
    DeveloperListComponent.prototype.getNormalText = function (developer) {
        if (!developer || !developer.name)
            return '';
        if (!this.searchString)
            return this.uiService.capitalize(developer.name);
        var str = developer.name.slice(this.searchString.length, developer.name.length);
        return this.uiService.format(str);
    };
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], DeveloperListComponent.prototype, "developers", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], DeveloperListComponent.prototype, "searchString", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], DeveloperListComponent.prototype, "tags", void 0);
    DeveloperListComponent = __decorate([
        Component({
            selector: 'developer-list',
            templateUrl: 'developerList.component.html',
            styleUrls: ['developerList.component.scss'],
            changeDetection: ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [UiService, TagService])
    ], DeveloperListComponent);
    return DeveloperListComponent;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/components/search/result/list/developerList/developerList.component.js.map