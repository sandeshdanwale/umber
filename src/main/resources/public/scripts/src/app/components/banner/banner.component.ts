import {Component} from '@angular/core';
import {UserPreferenceService} from '../../services/userPreference.service'

@Component({
	selector: 'banner',
	templateUrl: 'banner.component.html',
	styleUrls: ['banner.component.scss']
})
export class BannerComponent {

	preference = {};
	constructor(
  	) {
  		
  	}

  	public ngOnInit() {
  	}
}