import { Component, Input } from '@angular/core';
import { SearchDetailPanel } from '../../../../../models/aggregate/ui.model';
import { Landmark } from '../../../../../models/aggregate/landmark.model';
import { Developer } from '../../../../../models/aggregate/developer.model';
import * as _ from 'lodash';

@Component({
	selector: 'landmark-details',
	templateUrl: 'landmarkDetails.component.html',
	styleUrls: ['landmarkDetails.component.scss']
})
export class LandmarkDetailsComponent {

	@Input() landmark: Landmark;
  topDevelopers: any;

	constructor(
  	) {
  	}

}