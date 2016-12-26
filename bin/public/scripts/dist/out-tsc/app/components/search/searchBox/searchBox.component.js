var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, ViewChild } from '@angular/core';
import { DeveloperService } from '../../../services/developer.service';
import { PropertyService } from '../../../services/property.service';
import { LocationService } from '../../../services/location.service';
import { UiService } from '../../../services/ui.service';
import * as location from '../../../actions/location.action';
import * as developer from '../../../actions/developer.action';
import * as property from '../../../actions/property.action';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
export var SearchBoxComponent = (function () {
    function SearchBoxComponent(elementRef, developerService, propertyService, locationService, uiService, store) {
        this.developerService = developerService;
        this.propertyService = propertyService;
        this.locationService = locationService;
        this.uiService = uiService;
        this.store = store;
        this.preference = {};
        this.el = elementRef.nativeElement;
    }
    SearchBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        this.input = this.searchInput.nativeElement;
        var keyup = Observable.fromEvent(this.input, 'keyup')
            .map(function (e) {
            return e.target.value;
        })
            .filter(function (text) {
            return text.length >= 1;
        })
            .debounce(function (x) { return Observable.timer(10); })
            .distinctUntilChanged();
        var searcher = keyup.switchMap(self.searchUmber.bind(self));
        searcher.subscribe(function (_a) {
            var developers = _a[0], properties = _a[1], locations = _a[2];
            var _developers = developers
                .map(function (d) { return d.value.documents; })
                .map(function (d) { return d[0]; })
                .map(function (d) { return _.merge(d, { id: d.developerId }); })
                .map(function (d) { return _.omit(d, 'developerId'); });
            var _properties = properties
                .map(function (d) { return d.value.documents; })
                .map(function (d) { return d[0]; })
                .map(function (d) { return _.merge(d, { id: d.propertyId }); })
                .map(function (d) { return _.omit(d, 'propertyId'); });
            var _locations = locations
                .map(function (d) { return d.value.documents; })
                .map(function (d) { return d[0]; })
                .map(function (d) { return _.merge(d, { id: d.locationId }); })
                .map(function (d) { return _.omit(d, 'locationId'); });
            _this.store.dispatch(new developer.LoadSuccessAction(_developers));
            _this.store.dispatch(new property.LoadSuccessAction(_properties));
            _this.store.dispatch(new location.LoadSuccessAction(_locations));
        }, function (error) {
            console.log(error);
        });
    };
    SearchBoxComponent.prototype.ngOnChanges = function () {
    };
    SearchBoxComponent.prototype.ngOnDestroy = function () {
    };
    SearchBoxComponent.prototype.ngAfterViewInit = function () {
    };
    SearchBoxComponent.prototype.searchUmber = function (searchString) {
        return Observable.combineLatest(this.developerService.getDevelopers(searchString), this.propertyService.getProperties(searchString), this.locationService.getLocations(searchString));
    };
    SearchBoxComponent.prototype.openSearchDetailList = function () {
        this.uiService.loadSearchDetailList();
    };
    __decorate([
        ViewChild('searchInput'), 
        __metadata('design:type', Object)
    ], SearchBoxComponent.prototype, "searchInput", void 0);
    SearchBoxComponent = __decorate([
        Component({
            selector: 'search-box',
            templateUrl: 'searchBox.component.html',
            styleUrls: ['searchBox.component.scss']
        }), 
        __metadata('design:paramtypes', [ElementRef, DeveloperService, PropertyService, LocationService, UiService, Store])
    ], SearchBoxComponent);
    return SearchBoxComponent;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/components/search/searchBox/searchBox.component.js.map