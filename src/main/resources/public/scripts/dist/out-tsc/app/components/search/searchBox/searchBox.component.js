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
import { Property } from '../../../models/aggregate/property.model';
import { User } from '../../../models/aggregate/user.model';
import { Landmark } from '../../../models/aggregate/landmark.model';
import { Developer } from '../../../models/aggregate/developer.model';
import { DeveloperService } from '../../../services/developer.service';
import { PropertyService } from '../../../services/property.service';
import { LandmarkService } from '../../../services/landmark.service';
import { CityService } from '../../../services/city.service';
import { UiService } from '../../../services/ui.service';
import { TagService } from '../../../services/tag.service';
import * as developer from '../../../actions/developer.action';
import * as property from '../../../actions/property.action';
import * as landmark from '../../../actions/landmark.action';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
export var SearchBoxComponent = (function () {
    function SearchBoxComponent(elementRef, developerService, propertyService, cityService, landmarkService, uiService, tagService, store) {
        this.developerService = developerService;
        this.propertyService = propertyService;
        this.cityService = cityService;
        this.landmarkService = landmarkService;
        this.uiService = uiService;
        this.tagService = tagService;
        this.store = store;
        this.preference = {};
        this.searchString = new EventEmitter();
        this.el = elementRef.nativeElement;
    }
    SearchBoxComponent.prototype.ngOnInit = function () {
        var self = this;
        this.input = this.searchInput.nativeElement;
        var keyup = Observable.fromEvent(this.input, 'keyup')
            .filter(function (e) { return e.keyCode != 13; })
            .map(function (e) {
            return e.target.value;
        })
            .debounce(function (x) { return Observable.timer(10); })
            .distinctUntilChanged();
        //check keyup arguments what all args gets passed
        var searcher = keyup.switchMap(function (searchString) { return self.searchUmber.call(self, searchString, null); });
        searcher.subscribe(this.formatAndDispatch.bind(this), function (error) {
            console.log(error);
        });
    };
    SearchBoxComponent.prototype.ngOnChanges = function (changes) {
        if (changes.user) {
            var prevUser = changes.user.previousValue;
            var curUser = changes.user.currentValue;
            var prevCity = prevUser && prevUser.preference && prevUser.preference.city
                ? prevUser.preference.city.id.registrationId : '';
            var curCity = curUser && curUser.preference && curUser.preference.city
                ? curUser.preference.city.id.registrationId : '';
            if (prevCity !== curCity && prevCity) {
                this.selectedCity = curUser.preference.city;
                this.handleChange();
            }
        }
        if (changes.tags) {
            this.searchInput.nativeElement.value = '';
            this._searchString = '';
            this.searchString.emit(this._searchString);
            this.tagsToConsider = _.slice(changes.tags.currentValue, 0, 3);
            this.handleChange();
        }
    };
    SearchBoxComponent.prototype.handleChange = function () {
        var _this = this;
        this.searchUmber(this._searchString).subscribe(function (_a) {
            var developers = _a[0], properties = _a[1], landmarks = _a[2];
            return _this.formatAndDispatch([developers, properties, landmarks]);
        }, function (error) {
            console.log(error);
        });
    };
    SearchBoxComponent.prototype.formatAndDispatch = function (_a) {
        var developers = _a[0], properties = _a[1], landmarks = _a[2];
        var _developers = _.slice(_.map(developers, function (d) { return d && new Developer(d); }), 0, 13);
        var _properties;
        if (this.tagsToConsider && this.tagsToConsider.length) {
            _properties = _.map(properties, function (d) { return d && new Property(d); });
        }
        else {
            _properties = _.slice(_.map(properties, function (d) { return d && new Property(d); }), 0, 13);
        }
        var _landmarks = _.slice(_.map(landmarks, function (d) { return d && new Landmark(d); }), 0, 13);
        this.store.dispatch(new developer.LoadSuccessAction(_developers));
        this.store.dispatch(new property.LoadSuccessAction(_properties));
        this.store.dispatch(new landmark.LoadSuccessAction(_landmarks));
        if (this.tagsToConsider && this.tagsToConsider.length) {
            this.uiService.loadSearchDetailList();
        }
        this.searchString.emit(this._searchString);
    };
    SearchBoxComponent.prototype.ngOnDestroy = function () {
    };
    SearchBoxComponent.prototype.ngAfterViewInit = function () {
    };
    SearchBoxComponent.prototype.searchUmber = function (searchString) {
        this._searchString = searchString.toLowerCase().replace(/ /g, '');
        return Observable.combineLatest(this.getDevelopers(this._searchString), this.getProperties(this._searchString), this.getLandmarks(this._searchString));
    };
    SearchBoxComponent.prototype.getLandmarkTag = function () {
        return _.head(_.filter(this.tagsToConsider, function (t) { return t.type === 'landmark'; }));
    };
    SearchBoxComponent.prototype.getPropertyTag = function () {
        return _.head(_.filter(this.tagsToConsider, function (t) { return t.type === 'property'; }));
    };
    SearchBoxComponent.prototype.getDeveloperTag = function () {
        return _.head(_.filter(this.tagsToConsider, function (t) { return t.type === 'developer'; }));
    };
    SearchBoxComponent.prototype.getDevelopers = function (searchString) {
        var curCityId = this.user && this.user.preference && this.user.preference.city ? this.user.preference.city.id.registrationId : '';
        var cityId = this.selectedCity ? this.selectedCity.id.registrationId : curCityId;
        if (this.tagsToConsider && this.tagsToConsider.length) {
            var landmarkTag = this.getLandmarkTag();
            var developerTag = this.getDeveloperTag();
            var propertyTag = this.getPropertyTag();
            if (developerTag || propertyTag) {
                return Observable.of([]);
            }
            else {
                if (landmarkTag) {
                    return this.developerService.getDevelopersByLandmarkId(cityId, searchString, landmarkTag.id);
                }
                else {
                    return this.developerService.getDevelopers(cityId, searchString);
                }
            }
        }
        else {
            return this.developerService.getDevelopers(cityId, searchString);
        }
    };
    SearchBoxComponent.prototype.getLandmarks = function (searchString) {
        var curCityId = this.user && this.user.preference && this.user.preference.city ? this.user.preference.city.id.registrationId : '';
        var cityId = this.selectedCity ? this.selectedCity.id.registrationId : curCityId;
        if (this.tagsToConsider && this.tagsToConsider.length) {
            return Observable.of([]);
        }
        else {
            return this.landmarkService.getLandmarks(cityId, searchString);
        }
    };
    SearchBoxComponent.prototype.getProperties = function (searchString) {
        var curCityId = this.user && this.user.preference && this.user.preference.city ? this.user.preference.city.id.registrationId : '';
        var cityId = this.selectedCity ? this.selectedCity.id.registrationId : curCityId;
        if (this.tagsToConsider && this.tagsToConsider.length) {
            var landmarkTag = this.getLandmarkTag();
            var developerTag = this.getDeveloperTag();
            var propertyTag = this.getPropertyTag();
            if (propertyTag) {
                return this.propertyService.getPropertyDetails(propertyTag.id)
                    .map(function (property) { return [property]; });
            }
            else {
                if (landmarkTag) {
                    if (developerTag) {
                        return this.propertyService.getPropertiesByLandmarkAndDeveloper(cityId, searchString, landmarkTag.id, developerTag.id);
                    }
                    else {
                        return this.propertyService.getPropertiesByLandmark(cityId, searchString, landmarkTag.id);
                    }
                }
                else {
                    if (developerTag) {
                        return this.propertyService.getPropertiesByDeveloper(cityId, searchString, developerTag.id);
                    }
                    else {
                        return this.propertyService.getProperties(cityId, searchString);
                    }
                }
            }
        }
        else {
            return this.propertyService.getProperties(cityId, searchString);
        }
    };
    SearchBoxComponent.prototype.openSearchDetailList = function () {
        this.uiService.loadSearchDetailList();
    };
    __decorate([
        Input(), 
        __metadata('design:type', User)
    ], SearchBoxComponent.prototype, "user", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], SearchBoxComponent.prototype, "tags", void 0);
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
        __metadata('design:paramtypes', [ElementRef, DeveloperService, PropertyService, CityService, LandmarkService, UiService, TagService, Store])
    ], SearchBoxComponent);
    return SearchBoxComponent;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/components/search/searchBox/searchBox.component.js.map