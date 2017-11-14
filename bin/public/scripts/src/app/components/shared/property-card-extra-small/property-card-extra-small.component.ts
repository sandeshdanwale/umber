import { Component, OnInit, Input } from '@angular/core';
import { Property } from '../../../models/aggregate/property.model';

@Component({
  selector: 'property-card-extra-small',
  templateUrl: './property-card-extra-small.component.html',
  styleUrls: ['./property-card-extra-small.component.scss']
})
export class PropertyCardExtraSmallComponent {

  @Input() property: Property;

  constructor(
  ) {
  }

  get imageUrl() {
    let id = '3601'; //this.property.id.registrationId;
    return `/assets/images/property/prop${id}/propertyImage1.jpg`;
  }

}
