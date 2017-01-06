import { Component, Input } from '@angular/core';
import { User } from '../../../models/aggregate/user.model';

@Component({
	selector: 'featured-heading',
	templateUrl: 'featuredHeading.component.html',
	styleUrls: ['featuredHeading.component.scss']
})
export class FeaturedHeadingComponent {

	@Input() user: User;
	constructor(
  	) {
  	}

  	public ngOnInit() {

  	}

  	get selectedCity() {
  		if (this.user && this.user.preference.city) {
  			return this.user.preference.city.name;
  		}
  		return;
  	}
}