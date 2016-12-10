import { Component, ElementRef, ViewChild, OnInit, 
		OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { Property } from '../../../models/aggregate/property.model';
import { Location } from '../../../models/aggregate/location.model';
import { Developer } from '../../../models/aggregate/developer.model';
import { DeveloperService } from '../../../services/developer.service';
import { PropertyService } from '../../../services/property.service';
import { LocationService } from '../../../services/location.service';
import * as location from '../../../actions/location.action';
import * as developer from '../../../actions/developer.action';
import * as property from '../../../actions/property.action';
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

	@ViewChild('searchInput') searchInput: any;

	constructor(
		elementRef: ElementRef,
		private developerService: DeveloperService,
        private propertyService: PropertyService,
        private locationService: LocationService,
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
	        return text.length >= 1;
	      })
	      .debounce(function (x) { return Observable.timer(10); })
	      .distinctUntilChanged();

	    let searcher = keyup.switchMap(self.searchUmber.bind(self));

	    searcher.subscribe(
	       ([developers, properties, locations]) => {
	       	let _developers = developers
	       							.map((d) => d.value.documents)
	       							.map((d) => d[0])
	       							.map((d) => _.merge(d, {id: d.developerId}))
	       							.map((d) => _.omit(d, 'developerId'));
	    	let _properties = properties
	    							.map((d) => d.value.documents)
	       							.map((d) => d[0])
	       							.map((d) => _.merge(d, {id: d.propertyId}))
	       							.map((d) => _.omit(d, 'propertyId'));
	    	let _locations = locations
	    							.map((d) => d.value.documents)
	       							.map((d) => d[0])
	       							.map((d) => _.merge(d, {id: d.locationId}))
	       							.map((d) => _.omit(d, 'locationId'));
	        this.store.dispatch(new developer.LoadSuccessAction(_developers));
        	this.store.dispatch(new property.LoadSuccessAction(_properties));
        	this.store.dispatch(new location.LoadSuccessAction(_locations));
	      },
	      function (error) {
	        console.log(error)
	      });
	}

	public ngOnChanges() {
	    
	}

	public ngOnDestroy() {
	    
	}

	public ngAfterViewInit() {
		
	}

	public searchUmber(searchString: string): Observable<[Developer[], Property[], Location[]]> {
		return Observable.combineLatest(
	      	this.developerService.getDevelopers(searchString),
        	this.propertyService.getProperties(searchString),
        	this.locationService.getLocations(searchString)
	    )/*.map(([developers, properties, locations]) => {
	    	let _developers = developers.map((d) => d.value.documents);
	    	let _properties = properties.map((p) => p.value.documents);
	    	let _locations = locations.map((l) => l.value.documents);
	    	return [_developers, _properties, _locations];
	    })*/
	}

}