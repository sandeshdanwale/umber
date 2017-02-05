import { Component, Input } from '@angular/core';
import { Property } from '../../../models/aggregate/property.model';

@Component({
  selector: 'property-card-very-small',
  templateUrl: 'propertyCardVsmall.component.html',
  styleUrls: ['propertyCardVsmall.component.scss']
})
export class PropertyCardVsmallComponent {

  @Input() property: Property;

  constructor(
  ) {
  }

  get imageUrl() {
    let id = '3601';//this.property.id.registrationId
    return `/assets/images/property/prop${id}/propertyImage1.jpg`;
  }

}