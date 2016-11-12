import {Component} from '@angular/core';
import {UserPreferenceService} from '../../services/userPreference.service'

@Component({
	selector: 'nav-bar',
	templateUrl: 'nav.component.html',
	styleUrls: ['nav.component.scss']
})
export class NavComponent {

	preference = {};
	constructor(
		private userPreferenceService: UserPreferenceService
  	) {
  		
  	}

  	public ngOnInit() {
  		this.userPreferenceService.getUserPreferences(null)
            .subscribe(preference => {
            	this.preference = preference;
            }, preference => {
            	this.preference = preference;
            })
  	}
}