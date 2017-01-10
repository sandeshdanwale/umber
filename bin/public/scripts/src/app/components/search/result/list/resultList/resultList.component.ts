import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Property } from '../../../../../models/aggregate/property.model';
import { City } from '../../../../../models/aggregate/city.model';
import { Landmark } from '../../../../../models/aggregate/landmark.model';
import { Developer } from '../../../../../models/aggregate/developer.model';
import { Tag } from '../../../../../models/aggregate/tag.model';

@Component({
	selector: 'result-list',
	templateUrl: 'resultList.component.html',
	styleUrls: ['resultList.component.scss']
})
export class ResultListComponent {

	@Input() properties: Property[];
	@Input() landmarks: Landmark[];
	@Input() developers: Developer[];
	@Input() searchString: string;
	@Input() isDetailsListActive: boolean;
	@Input() tags: Tag[];

	constructor(
  	) {
  	}

  	public ngOnInit() {
  		console.log('list')
  	}


}