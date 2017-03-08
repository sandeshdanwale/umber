import { Component, Input } from '@angular/core';
import { DeveloperService } from '../../../../services/developer.service';
import { User } from '../../../../models/aggregate/user.model';

@Component({
	selector: 'developerCardCarousel',
	templateUrl: 'developerCardCarousel.component.html',
	styleUrls: ['developerCardCarousel.component.scss']
})
export class DeveloperCardCarouselComponent {

	topDevelopers = [];
  @Input() user: User;
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