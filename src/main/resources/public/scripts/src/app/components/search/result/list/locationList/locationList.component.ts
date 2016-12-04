import { Component, Input } from '@angular/core';
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
  	) {
  		this.header = "Popular Localities";
  		this.context = 'location';
  	}

  	public ngOnInit() {
  	}
}