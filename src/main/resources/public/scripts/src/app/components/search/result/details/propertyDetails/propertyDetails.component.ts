import { Component, Input, OnInit } from '@angular/core';
import { SearchDetailPanel } from '../../../../../models/aggregate/ui.model';
import { Property } from '../../../../../models/aggregate/property.model';
import * as _ from 'lodash';

@Component({
	selector: 'property-details',
	templateUrl: 'propertyDetails.component.html',
	styleUrls: ['propertyDetails.component.scss']
})
export class PropertyDetailsComponent implements OnInit {

	@Input() properties: Property[];
	@Input() activeSearchDetailPanel: SearchDetailPanel;
	property: Property;
	constructor(
  	) {
  	}

  	ngOnInit() {
  		console.log(this.properties)
  		this.property = _.head(_.filter(this.properties, (p) => p.id.registrationId === this.activeSearchDetailPanel.entityId));
  	}

  	ngOnChanges() {
  		console.log('changes')
  		this.property = _.head(_.filter(this.properties, (p) => p.id.registrationId === this.activeSearchDetailPanel.entityId));
  	}
}