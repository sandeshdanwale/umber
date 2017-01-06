import { Component, Input } from '@angular/core';
import { Property } from '../../../../../models/aggregate/property.model';
import { Tag } from '../../../../../models/aggregate/tag.model';
import { User } from '../../../../../models/aggregate/user.model';

@Component({
	selector: 'result-detail-list',
	templateUrl: 'resultDetailList.component.html',
	styleUrls: ['resultDetailList.component.scss']
})
export class ResultDetailListComponent {

	@Input() properties: Property[];
	@Input() searchDetailListLoader: boolean;
	@Input() tags: Tag[];
	@Input() user: User;
	constructor(
  	) {
  	}

}