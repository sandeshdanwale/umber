import { Component, Input } from '@angular/core';
import { SearchDetailPanel } from '../../../../../models/aggregate/ui.model';
import { City } from '../../../../../models/aggregate/city.model';
import { Developer } from '../../../../../models/aggregate/developer.model';
import * as _ from 'lodash';

@Component({
	selector: 'city-details',
	templateUrl: 'cityDetails.component.html',
	styleUrls: ['cityDetails.component.scss']
})
export class CityDetailsComponent {

	@Input() cities: City[];
  @Input() developers: Developer[];
	@Input() activeSearchDetailPanel: SearchDetailPanel;
	city: City;
  displayCity: any;
  topDevelopers: any;
  
	constructor(
  	) {
      this.displayCity = {};
  	}

  	ngOnInit() {
  		console.log(this.cities)
  		this.city = _.head(_.filter(this.cities, (p) => p.id.registrationId === this.activeSearchDetailPanel.entityId));
      this.initDisplayCity(this.city);
  	}

  	ngOnChanges() {
  		console.log('changes')
  		this.city = _.head(_.filter(this.cities, (p) => p.id.registrationId === this.activeSearchDetailPanel.entityId));
      this.initDisplayCity(this.city);
  	}

    initDisplayCity(city: City) {
      if (city) {
        this.displayCity.name = this.city.name;
        this.displayCity.propertyCount = 50//this.city.propertyCount;
        this.displayCity.topDevelopers
        this.topDevelopers = this.developers.slice(0, 5);
      }
    }
}