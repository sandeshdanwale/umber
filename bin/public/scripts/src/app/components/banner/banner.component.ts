import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../services/user.service';
import { CityService } from '../../services/city.service';
import { City } from '../../models/aggregate/city.model';
import { User } from '../../models/aggregate/user.model';

@Component({
	selector: 'banner',
	templateUrl: 'banner.component.html',
	styleUrls: ['banner.component.scss']
})
export class BannerComponent {

	cities: Observable<City[]>;
	@Input() user: User;

	constructor(
    	private cityService: CityService
  ) {
  	this.cities = this.cityService.city; 
  }

  	public ngOnInit() {
  	}

}