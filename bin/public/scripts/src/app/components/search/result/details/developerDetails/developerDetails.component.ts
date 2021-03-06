import { Component, Input } from '@angular/core';
import { SearchDetailPanel } from '../../../../../models/aggregate/ui.model';
import { Developer } from '../../../../../models/aggregate/developer.model';
import { Property } from '../../../../../models/aggregate/property.model';
import * as _ from 'lodash';

@Component({
	selector: 'developer-details',
	templateUrl: 'developerDetails.component.html',
	styleUrls: ['developerDetails.component.scss']
})
export class DeveloperDetailsComponent {

	@Input() developer: Developer;
  @Input() properties: Property[];
  setProperties: any;
  
	constructor(
  	) {
  	}

  	ngOnInit() {}

  	ngOnChanges() {
    }

    get displayPropeties(): any {
      return this.developer && this.developer.properties ? this.developer.properties.slice(0, 2) : null;
    }

    get imageUrl() {
      let id = '3500'; //this.developer.id.registrationId
      return `/assets/images/developer/dev${id}/developerlogo.jpg`;
    }

    get displayDeveloper(): any {
      let displayDeveloper: {name: string} = 
        {
          name: ''
        };
      if (this.developer) {
        displayDeveloper.name = this.developer.name;
      }
      return displayDeveloper;
    }
}