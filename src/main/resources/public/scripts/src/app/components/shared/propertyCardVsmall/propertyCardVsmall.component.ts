import { Component, Input } from '@angular/core';
import { Property } from '../../../models/aggregate/property.model';
import { DisplayProperty } from '../../../models/displayProperty.model';
import * as _ from 'lodash';

@Component({
  selector: 'property-card-very-small',
  templateUrl: 'propertyCardVsmall.component.html',
  styleUrls: ['propertyCardVsmall.component.scss']
})
export class PropertyCardVsmallComponent {

  @Input() property: Property;
  private displayProperty: DisplayProperty;
  private style: any;

  constructor(
    ) {
    }

    ngOnInit() {
      this.initDisplayProperty();
      this.style = 'url(/assets/images/logo.jpg)';
    }

    ngOnChanges() {
      this.initDisplayProperty();
      this.style = 'url(/assets/images/logo.jpg)';
    }

    private initDisplayProperty() {
      if (!this.displayProperty) {
        this.displayProperty = new DisplayProperty();
      }
      this.displayProperty.name = this.getDisplayPropertyName();
    }

    private getDisplayPropertyName(): string{
      return this.property ? this.property.name : '';
    }

}