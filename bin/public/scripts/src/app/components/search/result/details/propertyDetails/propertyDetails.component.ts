import { Component, Input, OnInit } from '@angular/core';
import { SearchDetailPanel } from '../../../../../models/aggregate/ui.model';
import { Property } from '../../../../../models/aggregate/property.model';
import { Address } from '../../../../../models/aggregate/aggregate.model';
import { User } from '../../../../../models/aggregate/user.model';
import { Config } from '../../../../../models/aggregate/config.model';
import * as _ from 'lodash';

@Component({
	selector: 'property-details',
	templateUrl: 'propertyDetails.component.html',
	styleUrls: ['propertyDetails.component.scss']
})
export class PropertyDetailsComponent implements OnInit {

	@Input() property: Property;
  @Input() user: User;
	constructor(
  	) {
  	}

  	ngOnInit() {
    }

  	ngOnChanges() {
    }

}