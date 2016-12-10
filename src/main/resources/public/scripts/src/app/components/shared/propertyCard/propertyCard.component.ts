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
	private displayProperty: DisplayProperty = null;

	constructor(
  	) {
  	}

  	public ngOnInit() {
      this.initDisplayProperty();
  	}

  	private initDisplayProperty() {
      if (!this.displayProperty) {
        this.displayProperty = new DisplayProperty();
      }
      this.displayProperty.name = this.getDisplayPropertyName();
      this.displayProperty.description = this.getDisplayPropertyDescription();
    }


    private getDisplayPropertyName(): string{
      return this.property ? this.property.name : '';
    }

    private getDisplayPropertyDescription(): string{
      return this.property ? this.property.description : '';
    }
}