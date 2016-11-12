import {Component} from '@angular/core';
import {UserPreferenceService} from '../../services/userPreference.service'

@Component({
	selector: 'search-box',
	templateUrl: 'search.component.html',
	styleUrls: ['search.component.scss']
})
export class SearchComponent {

	preference = {};
	constructor(
  	) {
  		
  	}

  	public ngOnInit() {
  	}
}