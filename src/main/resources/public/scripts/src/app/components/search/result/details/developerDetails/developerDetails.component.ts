import { Component, Input } from '@angular/core';
import { SearchDetailPanel } from '../../../../../models/aggregate/ui.model';
import { Developer } from '../../../../../models/aggregate/developer.model';

@Component({
	selector: 'developer-details',
	templateUrl: 'developerDetails.component.html',
	styleUrls: ['developerDetails.component.scss']
})
export class DeveloperDetailsComponent {

	@Input() developers: Developer[];
	@Input() activeSearchDetailPanel: SearchDetailPanel;
	constructor(
  	) {
  		
  	}

  	public ngOnInit() {
  	}
}