import { Component, Input } from '@angular/core';
import { SearchDetailPanel } from '../../../../../models/aggregate/ui.model';
import { Location } from '../../../../../models/aggregate/location.model';
import { Developer } from '../../../../../models/aggregate/developer.model';
import * as _ from 'lodash';

@Component({
	selector: 'location-details',
	templateUrl: 'locationDetails.component.html',
	styleUrls: ['locationDetails.component.scss']
})
export class LocationDetailsComponent {

	@Input() locations: Location[];
  @Input() developers: Developer[];
	@Input() activeSearchDetailPanel: SearchDetailPanel;
	location: Location;
  displayLocation: any;
  topDevelopers: any;
  
	constructor(
  	) {
      this.displayLocation = {};
  	}

  	ngOnInit() {
  		console.log(this.locations)
  		this.location = _.head(_.filter(this.locations, (p) => p.id.registrationId === this.activeSearchDetailPanel.entityId));
      this.initDisplayLocation(this.location);
  	}

  	ngOnChanges() {
  		console.log('changes')
  		this.location = _.head(_.filter(this.locations, (p) => p.id.registrationId === this.activeSearchDetailPanel.entityId));
      this.initDisplayLocation(this.location);
  	}

    initDisplayLocation(location: Location) {
      if (location) {
        this.displayLocation.name = this.location.name;
        this.displayLocation.propertyCount = 50//this.location.propertyCount;
        this.displayLocation.topDevelopers
        this.topDevelopers = this.developers.slice(0, 5);
      }
    }
}