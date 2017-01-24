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
  @Input() index: number;
  imageUrl: string;
  private style: any;

  constructor(
    ) {
    }

    ngOnInit() {
      this.imageUrl = `/assets/images/prop${this.index}.jpg`;
    }

    ngOnChanges() {
      this.imageUrl = `/assets/images/prop${this.index}.jpg`;
    }

    get displayPropertyName(): string {
      return this.property ? this.property.name : '';
    }

}