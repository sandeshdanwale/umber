import { Component, Input } from '@angular/core';
import { PropertyService } from '../../../../services/property.service';
import { Observable } from 'rxjs/Observable';
import { Property } from '../../../../models/aggregate/property.model';

@Component({
	selector: 'propertyCardCarousel',
	templateUrl: 'propertyCardCarousel.component.html',
	styleUrls: ['propertyCardCarousel.component.scss']
})
export class PropertyCardCarouselComponent {

	featuredProperties: Observable<Property[]>;

	constructor(
		private propertyService: PropertyService
  	) {
  		this.featuredProperties = this.propertyService.property;
  	}

  	public ngOnInit() {
  	}
}