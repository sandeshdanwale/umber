import { Component, Input } from '@angular/core';
import { PropertyService } from '../../../../services/property.service'

@Component({
	selector: 'propertyCardCarousel',
	templateUrl: 'propertyCardCarousel.component.html',
	styleUrls: ['propertyCardCarousel.component.scss']
})
export class PropertyCardCarouselComponent {

	featuredProperties = [];

	constructor(
		private propertyService: PropertyService
  	) {
  		
  	}

  	public ngOnInit() {
  		this.propertyService.getFeaturedProperties()
            .subscribe(featuredProperties => {
            	this.featuredProperties = featuredProperties;
            }, featuredProperties => {
            	this.featuredProperties = featuredProperties;
            })
  	}
}