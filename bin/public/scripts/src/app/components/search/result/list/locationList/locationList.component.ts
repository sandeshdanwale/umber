import { Component } from '@angular/core';
import { LocationService } from '../../../../../services/location.service';
import { Observable } from 'rxjs/Observable';
import { Location } from '../../../../../models/aggregate/location.model';

@Component({
	selector: 'location-list',
	templateUrl: 'locationList.component.html',
	styleUrls: ['locationList.component.scss']
})
export class LocationListComponent {

	locations: Observable<Location[]>;
	header: string;
	constructor(
		private locationService: LocationService
  	) {
  		this.locations = this.locationService.location;
  		this.header = "Popular Localities";
  	}

  	public ngOnInit() {
  	}
}