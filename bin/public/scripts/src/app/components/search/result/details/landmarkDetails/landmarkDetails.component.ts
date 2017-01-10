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
  @Input() developers: Developer[];
  topDevelopers: any;

	constructor(
  	) {
  	}

  	ngOnInit() {
  	}

  	ngOnChanges() {
  	}

    get displayLandmark(): any {
      let displayLandmark: {name: string, propertyCount : number} = 
        {
          name: '', 
          propertyCount: null
        };
      if (this.landmark) {
        displayLandmark.name = this.landmark.name;
        displayLandmark.propertyCount = 50//this.landmark.propertyCount;
        this.topDevelopers = this.developers.slice(0, 5);
      }
      return displayLandmark;
    }
}