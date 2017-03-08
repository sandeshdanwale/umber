import { Component, ElementRef, ViewChild, OnInit, OnDestroy, 
	OnChanges, AfterViewInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Property } from '../../../models/aggregate/property.model';
import { City } from '../../../models/aggregate/city.model';
import { User } from '../../../models/aggregate/user.model';
import { Landmark } from '../../../models/aggregate/landmark.model';
import { Developer } from '../../../models/aggregate/developer.model';
import { Tag } from '../../../models/aggregate/tag.model';
import { DeveloperService } from '../../../services/developer.service';
import { PropertyService } from '../../../services/property.service';
import { LandmarkService } from '../../../services/landmark.service';
import { CityService } from '../../../services/city.service';
import { UiService } from '../../../services/ui.service';
import { TagService } from '../../../services/tag.service';
import * as city from '../../../actions/city.action';
import * as developer from '../../../actions/developer.action';
import * as property from '../../../actions/property.action';
import * as defaultProperty from '../../../actions/defaultProperty.action';
import * as landmark from '../../../actions/landmark.action';
import * as ui from '../../../actions/ui.action';
import * as fromRoot from '../../../reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

@Component({
	selector: 'search-box',
	templateUrl: 'searchBox.component.html',
	styleUrls: ['searchBox.component.scss']
})
export class SearchBoxComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {

	preference = {};
	el: HTMLElement;
	input: HTMLInputElement;
	_searchString: string;
	tagsToConsider: Tag[];
	selectedCity: City;

	@Input() user: User;
	@Input() tags: Tag[];
	@Output() searchString = new EventEmitter();

	@ViewChild('searchInput') searchInput: any;

	constructor(
		elementRef: ElementRef,
		private developerService: DeveloperService,
        private propertyService: PropertyService,
        private cityService: CityService,
        private landmarkService: LandmarkService,
        private uiService: UiService,
        private tagService: TagService,
        private store: Store<fromRoot.State>
  	) {
  		this.el = elementRef.nativeElement;
  	}

  	public ngOnInit() {
  		let self = this;
	    this.input = this.searchInput.nativeElement;
	    let keyup = Observable.fromEvent(this.input, 'keyup')
	      .filter((e: any) => e.keyCode != 13) 
	      .map((e: any) => 
	      	e.target.value
	       )
	      //.filter((text) => text.length >= 1 && text.trim().length >= 1)
	      .debounce((x) => Observable.timer(10))
	      .distinctUntilChanged();
//check keyup arguments what all args gets passed
	    let searcher = keyup.switchMap((searchString) => self.searchUmber.call(self, searchString, null));
	    searcher.subscribe(
       		this.formatAndDispatch.bind(this),
        function (error) {
        	console.log(error)
        });

	}

	public ngOnChanges(changes) {
		if (changes.user) {
			let prevUser = changes.user.previousValue;
			let curUser = changes.user.currentValue;
		    let prevCity =  prevUser && prevUser.preference && prevUser.preference.city 
		    	? prevUser.preference.city.id.registrationId : '';
		    let curCity =  curUser && curUser.preference && curUser.preference.city 
		    	? curUser.preference.city.id.registrationId : '';
		    if (prevCity !== curCity && prevCity) {
		    	this.selectedCity = curUser.preference.city;
		    	this.handleChange();
		    }
		}
		let tagChanged = changes.tags && ((changes.tags.previousValue &&
		changes.tags.previousValue.length) || (changes.tags.currentValue &&
		changes.tags.currentValue.length));
		if (tagChanged) {
			this.searchInput.nativeElement.value = '';
			this._searchString = '';
			this.searchString.emit(this._searchString);
			this.tagsToConsider = <Tag[]> _.slice(changes.tags.currentValue, 0, 3);
			this.handleChange();
		}
	}

	private handleChange() {
		this.searchUmber(this._searchString).subscribe(
   			([developers, properties, landmarks]) => {
   				return this.formatAndDispatch([developers, properties, landmarks])
   			},
	        function (error) {
	        	console.log(error)
	        })
	}

	private formatAndDispatch([developers, properties, landmarks]) {
       	let _developers = _.slice(
                              _.map(developers, (d) => d && new Developer(d)),
                              0, 13);
       	let _properties;
       	if(this.tagsToConsider && this.tagsToConsider.length) {
       		_properties = _.map(properties, (d) => d && new Property(d));
       	} else {
            _properties = _.slice(
                              _.map(properties, (d) => d && new Property(d)),
                              0, 13);
       	}
        let _landmarks = _.slice(
                              _.map(landmarks, (d) => d && new Landmark(d)),
                              0, 13);
        this.store.dispatch(new developer.LoadSuccessAction(_developers));
    	this.store.dispatch(new property.LoadSuccessAction(_properties));
    	this.store.dispatch(new landmark.LoadSuccessAction(_landmarks));
    	if(this.tagsToConsider && this.tagsToConsider.length) {
    		this.uiService.loadSearchDetailList();
    	}
    	this.searchString.emit(this._searchString);
	}

	public ngOnDestroy() {
	    
	}

	public ngAfterViewInit() {
		
	}

	private searchUmber(searchString: string): Observable<[Developer[], Property[], Landmark[]]> {
		this._searchString = searchString ? searchString.toLowerCase().replace(/ /g, '') : '';
		return Observable.combineLatest(
	      	this.getDevelopers(this._searchString),
        	this.getProperties(this._searchString),
        	this.getLandmarks(this._searchString)
	    )
	}

	private getLandmarkTag() {
		return _.head(_.filter(this.tagsToConsider, (t) => t.type === 'landmark'));
	}

	private getPropertyTag() {
		return _.head(_.filter(this.tagsToConsider, (t) => t.type === 'property'));
	}

	private getDeveloperTag() {
		return _.head(_.filter(this.tagsToConsider, (t) => t.type === 'developer'));
	}

	private getDevelopers(searchString: string): Observable<Developer[]>  {
		let curCityId = this.user && this.user.preference && this.user.preference.city ? this.user.preference.city.id.registrationId : '';
		let cityId = this.selectedCity ? this.selectedCity.id.registrationId : curCityId;
		if (this.tagsToConsider && this.tagsToConsider.length) {
			let landmarkTag = this.getLandmarkTag();
			let developerTag = this.getDeveloperTag();
			let propertyTag = this.getPropertyTag();
			if (developerTag || propertyTag) {
				return Observable.of([]);
			} else {
				if (landmarkTag) {
					return this.developerService.getDevelopersByLandmarkId(cityId, searchString, landmarkTag.id);
				} else {
					return this.developerService.getDevelopers(cityId, searchString);
				}
			}
		} else {
			return this.developerService.getDevelopers(cityId, searchString);
		}
		
	}

	private getLandmarks(searchString: string): Observable<Landmark[]>  {
		let curCityId = this.user && this.user.preference && this.user.preference.city ? this.user.preference.city.id.registrationId : '';
		let cityId = this.selectedCity ? this.selectedCity.id.registrationId : curCityId;
		if (this.tagsToConsider && this.tagsToConsider.length) {
			return Observable.of([]);
		} else {
			return this.landmarkService.getLandmarks(cityId, searchString)
		}
		
	}

	private getProperties(searchString: string): Observable<Property[]>  {
		let curCityId = this.user && this.user.preference && this.user.preference.city ? this.user.preference.city.id.registrationId : '';
		let cityId = this.selectedCity ? this.selectedCity.id.registrationId : curCityId;
		if (this.tagsToConsider && this.tagsToConsider.length) {
			let landmarkTag = this.getLandmarkTag();
			let developerTag = this.getDeveloperTag();
			let propertyTag = this.getPropertyTag();
			if (propertyTag) {
				return this.propertyService.getPropertyDetails(propertyTag.id)
				.map(property => [property]);
			} else {
				if (landmarkTag) {
					if (developerTag) {
						return this.propertyService.getPropertiesByLandmarkAndDeveloper(cityId, searchString, landmarkTag.id, developerTag.id);
					} else {
						return this.propertyService.getPropertiesByLandmark(cityId, searchString, landmarkTag.id);
					}
				} else {
					if (developerTag) {
						return this.propertyService.getPropertiesByDeveloper(cityId, searchString, developerTag.id);
					} else {
						return this.propertyService.getProperties(cityId, searchString);
					}
				}
			}
		} else {
			return this.propertyService.getProperties(cityId, searchString);
		}

	}

	private openSearchDetailList(): void {
		this.uiService.loadSearchDetailList();
	}

}