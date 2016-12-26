import { Component, Input } from '@angular/core';
import { SearchDetailPanel } from '../../../../../models/aggregate/ui.model';
import { Property } from '../../../../../models/aggregate/property.model';
import { City } from '../../../../../models/aggregate/city.model';
import { Developer } from '../../../../../models/aggregate/developer.model';

@Component({
	selector: 'result-details',
	templateUrl: 'resultDetails.component.html',
	styleUrls: ['resultDetails.component.scss']
})
export class ResultDetailsComponent {

	@Input() activeSearchDetailPanel: SearchDetailPanel;
	@Input() properties: Property[];
	@Input() cities: City[];
	@Input() developers: Developer[];
	constructor(
  	) {
  		
  	}

  	public ngOnInit() {
  		console.log('resultdetails')
  	}
}