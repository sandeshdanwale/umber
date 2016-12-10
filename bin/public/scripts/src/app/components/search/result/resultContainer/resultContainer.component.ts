import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UiService } from '../../../../services/ui.service';
import { SearchDetailPanel } from '../../../../models/aggregate/ui.model';
import { Property } from '../../../../models/aggregate/property.model';
import { Location } from '../../../../models/aggregate/location.model';
import { Developer } from '../../../../models/aggregate/developer.model';
import { PropertyService } from '../../../../services/property.service';
import { LocationService } from '../../../../services/location.service';
import { DeveloperService } from '../../../../services/developer.service';

@Component({
	selector: 'result-container',
	templateUrl: 'resultContainer.component.html',
	styleUrls: ['resultContainer.component.scss']
})
export class ResultContainerComponent {

	activeSearchDetailPanel: Observable<SearchDetailPanel>;
	properties: Observable<Property[]>;
	locations: Observable<Location[]>;
	developers: Observable<Developer[]>;
	constructor(
		private propertyService: PropertyService,
		private locationService: LocationService,
		private developerService: DeveloperService,
		private uiService: UiService
  	) {
  		this.properties = this.propertyService.property;
  		this.locations = this.locationService.location;
  		this.developers = this.developerService.developer;
  		this.activeSearchDetailPanel = this.uiService.activeSearchDetailPanel;
  	}
}