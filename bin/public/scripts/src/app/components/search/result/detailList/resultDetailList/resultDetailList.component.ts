import { Component, Input } from '@angular/core';
import { Property } from '../../../../../models/aggregate/property.model';

@Component({
	selector: 'result-detail-list',
	templateUrl: 'resultDetailList.component.html',
	styleUrls: ['resultDetailList.component.scss']
})
export class ResultDetailListComponent {

	@Input() properties: Property[];
	constructor(
  	) {
  	}

}