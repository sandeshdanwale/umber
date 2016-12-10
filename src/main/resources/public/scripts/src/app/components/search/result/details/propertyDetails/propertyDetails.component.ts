import { Component, Input, OnInit } from '@angular/core';
import { SearchDetailPanel } from '../../../../../models/aggregate/ui.model';
import { Property } from '../../../../../models/aggregate/property.model';
import { Address } from '../../../../../models/aggregate/aggregate.model';
import { Config } from '../../../../../models/aggregate/config.model';
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
  		this.property = this.properties ? _.head(_.filter(this.properties, (p) => {
        let id = p.id ? p.id.registrationId : p.propertyId ? p.propertyId.registrationId : '';
        return id === this.activeSearchDetailPanel.entityId;
      })) : null;
  	}

  	ngOnChanges() {
  		this.property = this.properties ? _.head(_.filter(this.properties, (p) => {
        let id = p.id ? p.id.registrationId : p.propertyId ? p.propertyId.registrationId : '';
        return id === this.activeSearchDetailPanel.entityId;
      })) : null;
  	}

}