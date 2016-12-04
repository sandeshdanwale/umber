import { Component, Input } from '@angular/core';
import { SearchDetailPanel } from '../../../../../models/aggregate/ui.model';
import { Location } from '../../../../../models/aggregate/location.model';

@Component({
	selector: 'location-details',
	templateUrl: 'locationDetails.component.html',
	styleUrls: ['locationDetails.component.scss']
})
export class LocationDetailsComponent {

	@Input() locations: Location[];
	@Input() activeSearchDetailPanel: SearchDetailPanel;
	constructor(
  	) {
  		
  	}

  	public ngOnInit() {
  	}
}