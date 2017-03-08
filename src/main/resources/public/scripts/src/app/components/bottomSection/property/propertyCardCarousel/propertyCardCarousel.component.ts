import { Component, Input } from '@angular/core';
import { PropertyService } from '../../../../services/property.service';
import { Observable } from 'rxjs/Observable';
import { Property } from '../../../../models/aggregate/property.model';
import { User } from '../../../../models/aggregate/user.model';

@Component({
	selector: 'propertyCardCarousel',
	templateUrl: 'propertyCardCarousel.component.html',
	styleUrls: ['propertyCardCarousel.component.scss']
})
export class PropertyCardCarouselComponent {

	@Input() properties: Property[];
	@Input() user: User;
	constructor(
  	) {
  		
  	}

  	public ngOnInit() {
  	}
}