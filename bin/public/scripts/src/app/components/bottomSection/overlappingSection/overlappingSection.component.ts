import { Component , Input } from '@angular/core';
import { User } from '../../../models/aggregate/user.model';
import { City } from '../../../models/aggregate/city.model';
import { Panel } from '../../../models/aggregate/ui.model';
import { Property } from '../../../models/aggregate/property.model';
import { PropertyService } from '../../../services/property.service';
import * as defaultProperty from '../../../actions/defaultProperty.action';
import * as fromRoot from '../../../reducers';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
	selector: 'overlappingSection',
	templateUrl: 'overlappingSection.component.html',
	styleUrls: ['overlappingSection.component.scss']
})
export class OverlappingSectionComponent {

	defaultProperties: Observable<Property[]>;
	@Input() user: User;
	@Input() activePanels: Panel[];
	constructor(
		private propertyService: PropertyService,
		private store: Store<fromRoot.State>
  	) {
  		this.defaultProperties = this.propertyService.defaultProperty;
  	}

  	public ngOnInit() {
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
		    	let city = curUser.preference.city;
		    	this.handleChange(city);
		    }
		}
	}

	private handleChange(city: City) {
		let cityId = city.id.registrationId;
		Observable.from(
            this.propertyService.getFeaturedProperties(cityId)
          ).subscribe(data => {
          	let defaultProperties = data ? data.slice(0, 4) : null;
            this.store.dispatch(new defaultProperty.LoadSuccessAction(defaultProperties));
          });
	}
}