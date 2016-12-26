import { Component, ElementRef, ViewChild, OnInit, OnDestroy, 
	OnChanges, AfterViewInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Property } from '../../../models/aggregate/property.model';
import { City } from '../../../models/aggregate/city.model';
import { User } from '../../../models/aggregate/user.model';
import { Landmark } from '../../../models/aggregate/landmark.model';
import { Developer } from '../../../models/aggregate/developer.model';
import { DeveloperService } from '../../../services/developer.service';
import { PropertyService } from '../../../services/property.service';
import { LandmarkService } from '../../../services/landmark.service';
import { CityService } from '../../../services/city.service';
import { UiService } from '../../../services/ui.service';
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

	@Input() user: User;
	@Output() searchString = new EventEmitter();

	@ViewChild('searchInput') searchInput: any;

	constructor(
		elementRef: ElementRef,
		private developerService: DeveloperService,
        private propertyService: PropertyService,
        private cityService: CityService,
        private landmarkService: LandmarkService,
        private uiService: UiService,
        private store: Store<fromRoot.State>
  	) {
  		this.el = elementRef.nativeElement;
  	}

  	public ngOnInit() {
  		let self = this;
	    this.input = this.searchInput.nativeElement;
	    let keyup = Observable.fromEvent(this.input, 'keyup')
	      .map(function (e: any) {
	        return e.target.value;
	      })
	      .filter(function (text) {
	        return true; //text.length >= 1;
	      })
	      .debounce(function (x) { return Observable.timer(10); })
	      .distinctUntilChanged();
//check keyup arguments what all args gets passed
	    let searcher = keyup.switchMap((searchString) => self.searchUmber.call(self, searchString, null));
	    searcher.subscribe(
       		this.handleChange.bind(this),
        function (error) {
        	console.log(error)
        });

	}

	public ngOnChanges(changes) {
		let prevUser = changes.user.previousValue;
		let curUser = changes.user.currentValue;
	    let prevCity =  prevUser && prevUser.preference && prevUser.preference.city 
	    	? prevUser.preference.city.id.registrationId : '';
	    let curCity =  curUser && curUser.preference && curUser.preference.city 
	    	? curUser.preference.city.id.registrationId : '';
	    if (prevCity !== curCity && prevCity) {
	    	this.searchUmber(this._searchString, curCity).subscribe(
       			([developers, properties, landmarks]) => {
       				return this.handleChange([developers, properties, landmarks], true)
       			},
		        function (error) {
		        	console.log(error)
		        })
	    }
	}

	private handleChange([developers, properties, landmarks], refreshDefaultProperties: boolean = false) {
       	let _developers = developers
       							.slice(0, 13)
       							//.map((d) => d && d.value && d.value.documents)
       							//.map((d) => d && d[0])
       							//.map((d) => d && _.merge(d, {id: d.developerId}))
       							//.map((d) => d && _.omit(d, 'developerId'));
    	let _properties = properties
    							.slice(0, 13)
    							//.map((d) => d && d.value && d.value.documents)
       							//.map((d) => d && d[0])
       							//.map((d) => d && _.merge(d, {id: d.landmarkId}))
       							//.map((d) => d && _.omit(d, 'landmarkId'));
    	let _landmarks = landmarks
    							.slice(0, 13)
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
	}

	public ngOnDestroy() {
	    
	}

	public ngAfterViewInit() {
		
	}

	private searchUmber(searchString: string, id: string = null): Observable<[Developer[], Property[], Landmark[]]> {
		this._searchString = searchString;
		let curCityId = this.user && this.user.preference && this.user.preference.city ? this.user.preference.city.id.registrationId : '';
		let cityId = id ? id :curCityId;
		return Observable.combineLatest(
	      	this.developerService.getDevelopers(cityId, searchString),
        	this.propertyService.getProperties(cityId, searchString),
        	this.landmarkService.getLandmarks(cityId, searchString)
	    )
	}

	private openSearchDetailList(): void {
		this.uiService.loadSearchDetailList();
	}

}