import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { UiService } from '../../../../../services/ui.service';
import { City } from '../../../../../models/aggregate/city.model';

@Component({
	selector: 'city-list',
	templateUrl: 'cityList.component.html',
	styleUrls: ['cityList.component.scss']
})
export class CityListComponent implements OnInit, OnChanges {

	@Input() cities: City[];
	header: string;
	context: string;
	constructor(
		private uiService: UiService
  	) {
  		this.header = "Popular Cities";
  		this.context = 'city';
  	}

  	public ngOnInit() {
  	}

    public ngOnChanges(changes) {
      console.log(changes)
    }

  	public updateCityDetailPanel(city: City) {
  		this.uiService.updateSearchDetailPanel(city.id.registrationId, this.context);
  	}
}