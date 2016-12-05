import { Component, Input } from '@angular/core';
import { UiService } from '../../../../../services/ui.service';
import { Location } from '../../../../../models/aggregate/location.model';

@Component({
	selector: 'location-list',
	templateUrl: 'locationList.component.html',
	styleUrls: ['locationList.component.scss']
})
export class LocationListComponent {

	@Input() locations: Location[];
	header: string;
	context: string;
	constructor(
		private uiService: UiService
  	) {
  		this.header = "Popular Localities";
  		this.context = 'location';
  	}

  	public ngOnInit() {
  	}

  	public updateLocationDetailPanel(location: Location) {
  		this.uiService.updateSearchDetailPanel(location.id.registrationId, this.context);
  	}
}