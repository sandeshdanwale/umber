import { Component, Input } from '@angular/core';
import { SearchDetailPanel } from '../../../../../models/aggregate/ui.model';
import { Location } from '../../../../../models/aggregate/location.model';
import * as _ from 'lodash';

@Component({
	selector: 'location-details',
	templateUrl: 'locationDetails.component.html',
	styleUrls: ['locationDetails.component.scss']
})
export class LocationDetailsComponent {

	@Input() locations: Location[];
	@Input() activeSearchDetailPanel: SearchDetailPanel;
	location: Location;
	constructor(
  	) {
  	}

  	ngOnInit() {
  		console.log(this.locations)
  		this.location = _.head(_.filter(this.locations, (p) => p.id.registrationId === this.activeSearchDetailPanel.entityId));
  	}

  	ngOnChanges() {
  		console.log('changes')
  		this.location = _.head(_.filter(this.locations, (p) => p.id.registrationId === this.activeSearchDetailPanel.entityId));
  	}
}