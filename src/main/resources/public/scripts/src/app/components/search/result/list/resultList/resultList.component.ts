import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Property } from '../../../../../models/aggregate/property.model';
import { Location } from '../../../../../models/aggregate/location.model';
import { Developer } from '../../../../../models/aggregate/developer.model';

@Component({
	selector: 'result-list',
	templateUrl: 'resultList.component.html',
	styleUrls: ['resultList.component.scss']
})
export class ResultListComponent {

	@Input() properties: Property[];
	@Input() locations: Location[];
	@Input() developers: Developer[];
	constructor(
  	) {
  	}

  	public ngOnInit() {
  		console.log('list')
  	}
}