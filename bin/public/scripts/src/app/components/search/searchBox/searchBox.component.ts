import { Component, ElementRef, ViewChild, OnInit, 
		OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { Property } from '../../../models/aggregate/property.model';
import { City } from '../../../models/aggregate/city.model';
import { Developer } from '../../../models/aggregate/developer.model';
import { DeveloperService } from '../../../services/developer.service';
import { PropertyService } from '../../../services/property.service';
import { CityService } from '../../../services/city.service';
import { UiService } from '../../../services/ui.service';
import * as city from '../../../actions/city.action';
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
        private cityService: CityService,
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
	        return text.length >= 1;
	      })
	      .debounce(function (x) { return Observable.timer(10); })
	      .distinctUntilChanged();

	    let searcher = keyup.switchMap(self.searchUmber.bind(self));

	    searcher.subscribe(
	       ([developers, properties, cities]) => {
	       	let _developers = developers
	       							.map((d) => d && d.value && d.value.documents)
	       							.map((d) => d && d[0])
	       							.map((d) => d && _.merge(d, {id: d.developerId}))
	       							.map((d) => d && _.omit(d, 'developerId'));
	    	let _properties = properties
	    							.map((d) => d && d.value && d.value.documents)
	       							.map((d) => d && d[0])
	       							.map((d) => d && _.merge(d, {id: d.propertyId}))
	       							.map((d) => d && _.omit(d, 'propertyId'));
	    	let _cities = cities
	    							.map((d) => d && d.value && d.value.documents)
	       							.map((d) => d && d[0])
	       							.map((d) => d && _.merge(d, {id: d.cityId}))
	       							.map((d) => d && _.omit(d, 'cityId'));
	        this.store.dispatch(new developer.LoadSuccessAction(_developers));
        	this.store.dispatch(new property.LoadSuccessAction(_properties));
        	this.store.dispatch(new city.LoadSuccessAction(_cities));
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

	private searchUmber(searchString: string): Observable<[Developer[], Property[], City[]]> {
		return Observable.combineLatest(
	      	this.developerService.getDevelopers(searchString),
        	this.propertyService.getProperties(searchString),
        	this.cityService.getCities(searchString)
	    )
	}

	private openSearchDetailList(): void {
		this.uiService.loadSearchDetailList();
	}

}