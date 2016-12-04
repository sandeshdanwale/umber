import { Component, Input } from '@angular/core';
import { SearchDetailPanel } from '../../../../../models/aggregate/ui.model';
import { Property } from '../../../../../models/aggregate/property.model';
import { Location } from '../../../../../models/aggregate/location.model';
import { Developer } from '../../../../../models/aggregate/developer.model';

@Component({
	selector: 'result-details',
	templateUrl: 'resultDetails.component.html',
	styleUrls: ['resultDetails.component.scss']
})
export class ResultDetailsComponent {

	@Input() activeSearchDetailPanel: SearchDetailPanel;
	@Input() properties: Property[];
	@Input() locations: Location[];
	@Input() developers: Developer[];
	constructor(
  	) {
  		
  	}

  	public ngOnInit() {
  		console.log('resultdetails')
  	}
}