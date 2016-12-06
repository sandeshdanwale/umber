import { Component, Input, OnInit } from '@angular/core';
import { SearchDetailPanel } from '../../../../../models/aggregate/ui.model';
import { Property } from '../../../../../models/aggregate/property.model';
import { Address } from '../../../../../models/aggregate/aggregate.model';
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
  address: Address;
  displayAddress: string;
  style: any;
  config:any;
	constructor(
  	) {
  	}

  	ngOnInit() {
  		console.log(this.properties)
  		this.property = _.head(_.filter(this.properties, (p) => p.id.registrationId === this.activeSearchDetailPanel.entityId));
      this.displayAddress = this.getDisplayAddress();
      //this.config = this.getConfig();
      this.style = 'url(/assets/images/logo.jpg)';
  	}

  	ngOnChanges() {
  		console.log('changes')
  		this.property = _.head(_.filter(this.properties, (p) => p.id.registrationId === this.activeSearchDetailPanel.entityId));
      this.displayAddress = this.getDisplayAddress();
      this.style = 'url(/assets/images/logo.jpg)';
  	}

    private getDisplayAddress() {
      let address = _.head(_.filter(this.property.addresses, (p) => p.type.toString() === 'HOME'));
      return address.city;

      /*if (address) {
        let lines = '';
        lines = !address.line1 ? lines : lines ? lines + ', ' + address.line1 : address.line1;
        lines = !address.line2 ? lines : lines ? lines + ', ' + address.line2 : address.line2;
        lines = !address.line3 ? lines : lines ? lines + ', ' + address.line3 : address.line3;

        let txt = lines + ', ' + address.city + ', ' + address.state;
        return txt.length > 35 ? txt.slice(0, 35) + ' ...' : txt;
      }
      return '';*/
    }
}