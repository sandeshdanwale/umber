import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { UiService } from '../../../../../services/ui.service';
import { Location } from '../../../../../models/aggregate/location.model';

@Component({
	selector: 'location-list',
	templateUrl: 'locationList.component.html',
	styleUrls: ['locationList.component.scss']
})
export class LocationListComponent implements OnInit, OnChanges {

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

    public ngOnChanges(changes) {
      console.log(changes)
    }

  	public updateLocationDetailPanel(location: Location) {
  		this.uiService.updateSearchDetailPanel(location.id.registrationId, this.context);
  	}
}