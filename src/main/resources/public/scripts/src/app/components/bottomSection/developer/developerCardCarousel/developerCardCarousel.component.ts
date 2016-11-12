import {Component} from '@angular/core';
import {DeveloperService} from '../../../../services/developer.service'

@Component({
	selector: 'developerCardCarousel',
	templateUrl: 'developerCardCarousel.component.html',
	styleUrls: ['developerCardCarousel.component.scss']
})
export class DeveloperCardCarouselComponent {

	topDevelopers = [];
	constructor(
		private developerService: DeveloperService
  	) {
  		
  	}

  	public ngOnInit() {
  		this.developerService.getTopDevelopers()
            .subscribe(topDevelopers => {
            	this.topDevelopers = topDevelopers;
            }, topDevelopers => {
            	this.topDevelopers = topDevelopers;
            })
  	}
}