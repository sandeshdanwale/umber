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
import { TagService } from '../../../../../services/tag.service';
import { Tag } from '../../../../../models/aggregate/tag.model';
export var PropertyListComponent = (function () {
    function PropertyListComponent(uiService, tagService) {
        this.uiService = uiService;
        this.tagService = tagService;
        this.header = "Featured Properties";
        this.context = 'property';
    }
    PropertyListComponent.prototype.ngOnInit = function () {
    };
    PropertyListComponent.prototype.updatePropertyDetailPanel = function (event, property) {
        if (event) {
            event.stopPropagation();
            event.preventDefault();
        }
        if (property) {
            this.uiService.updateSearchDetailPanel(property.id.registrationId, this.context);
        }
        return;
    };
    PropertyListComponent.prototype.addTag = function (event, property) {
        if (event) {
            event.stopPropagation();
            event.preventDefault();
        }
        if (property && (!this.tags || this.tags.length < 3)) {
            this.tagService.addTag(new Tag({ type: 'property', name: property.name, id: property.id.registrationId }));
        }
    };
    PropertyListComponent.prototype.getTexts = function (property) {
        if (!property || !property.name || !this.searchString)
            return [];
        var strArr = property.name.split(this.searchString);
        var strFormat = [];
        if (!strArr[0]) {
            strFormat.push({ txt: this.searchString, format: 'highlight' });
            strFormat.push({ txt: this.searchString, format: 'normal' });
        }
        else if (!strArr[strArr.length - 1]) {
            strFormat.push({ txt: this.searchString, format: 'highlight' });
        }
        else {
            for (var i = 0; i < strArr.length; i++) {
                if (i !== strArr.length - 1) {
                    strFormat.push({ txt: strArr[i], format: 'highlight' });
                    strFormat.push({ txt: this.searchString, format: 'normal' });
                }
            }
        }
    };
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], PropertyListComponent.prototype, "properties", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], PropertyListComponent.prototype, "searchString", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], PropertyListComponent.prototype, "tags", void 0);
    PropertyListComponent = __decorate([
        Component({
            selector: 'property-list',
            templateUrl: 'propertyList.component.html',
            styleUrls: ['propertyList.component.scss']
        }), 
        __metadata('design:paramtypes', [UiService, TagService])
    ], PropertyListComponent);
    return PropertyListComponent;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/components/search/result/list/propertyList/propertyList.component.js.map