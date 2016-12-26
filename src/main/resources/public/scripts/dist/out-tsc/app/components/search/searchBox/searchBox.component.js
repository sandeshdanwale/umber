var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../models/aggregate/user.model';
import { DeveloperService } from '../../../services/developer.service';
import { PropertyService } from '../../../services/property.service';
import { LandmarkService } from '../../../services/landmark.service';
import { CityService } from '../../../services/city.service';
import { UiService } from '../../../services/ui.service';
import * as developer from '../../../actions/developer.action';
import * as property from '../../../actions/property.action';
import * as defaultProperty from '../../../actions/defaultProperty.action';
import * as landmark from '../../../actions/landmark.action';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
export var SearchBoxComponent = (function () {
    function SearchBoxComponent(elementRef, developerService, propertyService, cityService, landmarkService, uiService, store) {
        this.developerService = developerService;
        this.propertyService = propertyService;
        this.cityService = cityService;
        this.landmarkService = landmarkService;
        this.uiService = uiService;
        this.store = store;
        this.preference = {};
        this.searchString = new EventEmitter();
        this.el = elementRef.nativeElement;
    }
    SearchBoxComponent.prototype.ngOnInit = function () {
        var self = this;
        this.input = this.searchInput.nativeElement;
        var keyup = Observable.fromEvent(this.input, 'keyup')
            .map(function (e) {
            return e.target.value;
        })
            .filter(function (text) {
            return true; //text.length >= 1;
        })
            .debounce(function (x) { return Observable.timer(10); })
            .distinctUntilChanged();
        //check keyup arguments what all args gets passed
        var searcher = keyup.switchMap(function (searchString) { return self.searchUmber.call(self, searchString, null); });
        searcher.subscribe(this.handleChange.bind(this), function (error) {
            console.log(error);
        });
    };
    SearchBoxComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var prevUser = changes.user.previousValue;
        var curUser = changes.user.currentValue;
        var prevCity = prevUser && prevUser.preference && prevUser.preference.city
            ? prevUser.preference.city.id.registrationId : '';
        var curCity = curUser && curUser.preference && curUser.preference.city
            ? curUser.preference.city.id.registrationId : '';
        if (prevCity !== curCity && prevCity) {
            this.searchUmber(this._searchString, curCity).subscribe(function (_a) {
                var developers = _a[0], properties = _a[1], landmarks = _a[2];
                return _this.handleChange([developers, properties, landmarks], true);
            }, function (error) {
                console.log(error);
            });
        }
    };
    SearchBoxComponent.prototype.handleChange = function (_a, refreshDefaultProperties) {
        var developers = _a[0], properties = _a[1], landmarks = _a[2];
        if (refreshDefaultProperties === void 0) { refreshDefaultProperties = false; }
        var _developers = developers
            .slice(0, 13);
        //.map((d) => d && d.value && d.value.documents)
        //.map((d) => d && d[0])
        //.map((d) => d && _.merge(d, {id: d.developerId}))
        //.map((d) => d && _.omit(d, 'developerId'));
        var _properties = properties
            .slice(0, 13);
        //.map((d) => d && d.value && d.value.documents)
        //.map((d) => d && d[0])
        //.map((d) => d && _.merge(d, {id: d.landmarkId}))
        //.map((d) => d && _.omit(d, 'landmarkId'));
        var _landmarks = landmarks
            .slice(0, 13);
        //.map((d) => d && d.value && d.value.documents)
        //.map((d) => d && d[0])
        //.map((d) => d && _.merge(d, {id: d.cityId}))
        //.map((d) => d && _.omit(d, 'cityId'));
        this.store.dispatch(new developer.LoadSuccessAction(_developers));
        this.store.dispatch(new property.LoadSuccessAction(properties));
        this.store.dispatch(new landmark.LoadSuccessAction(_landmarks));
        if (refreshDefaultProperties) {
            this.store.dispatch(new defaultProperty.LoadSuccessAction(_properties.slice(0, 4)));
        }
        this.searchString.emit(this._searchString);
    };
    SearchBoxComponent.prototype.ngOnDestroy = function () {
    };
    SearchBoxComponent.prototype.ngAfterViewInit = function () {
    };
    SearchBoxComponent.prototype.searchUmber = function (searchString, id) {
        if (id === void 0) { id = null; }
        this._searchString = searchString;
        var curCityId = this.user && this.user.preference && this.user.preference.city ? this.user.preference.city.id.registrationId : '';
        var cityId = id ? id : curCityId;
        return Observable.combineLatest(this.developerService.getDevelopers(cityId, searchString), this.propertyService.getProperties(cityId, searchString), this.landmarkService.getLandmarks(cityId, searchString));
    };
    SearchBoxComponent.prototype.openSearchDetailList = function () {
        this.uiService.loadSearchDetailList();
    };
    __decorate([
        Input(), 
        __metadata('design:type', User)
    ], SearchBoxComponent.prototype, "user", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], SearchBoxComponent.prototype, "searchString", void 0);
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
        __metadata('design:paramtypes', [ElementRef, DeveloperService, PropertyService, CityService, LandmarkService, UiService, Store])
    ], SearchBoxComponent);
    return SearchBoxComponent;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/components/search/searchBox/searchBox.component.js.map