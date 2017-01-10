import { Component, Input } from '@angular/core';
import { Property } from '../../../models/aggregate/property.model';
import { DisplayProperty } from '../../../models/displayProperty.model';
import * as _ from 'lodash';

@Component({
	selector: 'property-card',
	templateUrl: 'propertyCard.component.html',
	styleUrls: ['propertyCard.component.scss']
})
export class PropertyCardComponent {

	@Input() property: Property;

	constructor(
  	) {
  	}

  	public ngOnInit() {
  	}

  	get displayProperty(): any {
      let displayProperty = new DisplayProperty();
      displayProperty.name = this.getDisplayPropertyName();
      displayProperty.description = this.getDisplayPropertyDescription();
      return displayProperty;
    }


    private getDisplayPropertyName(): string{
      return this.property ? this.property.name : '';
    }

    private getDisplayPropertyDescription(): string{
      return this.property ? this.property.description : '';
    }
}