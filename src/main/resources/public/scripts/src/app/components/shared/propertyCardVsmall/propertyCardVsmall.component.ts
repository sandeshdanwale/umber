import { Component, Input } from '@angular/core';
import { Property } from '../../../models/aggregate/property.model';
import { User } from '../../../models/aggregate/user.model';
import { UiService } from '../../../services/ui.service';

@Component({
  selector: 'property-card-very-small',
  templateUrl: 'propertyCardVsmall.component.html',
  styleUrls: ['propertyCardVsmall.component.scss']
})
export class PropertyCardVsmallComponent {

  @Input() property: Property;
  @Input() user: User;
  constructor(
    private uiService: UiService
  ) {
  }

  get imageUrl() {
    let id = this.property.id.registrationId; //'3601';
    return `/assets/images/property/prop${id}/propertyImage1.jpg`;
  }

  public loadPropertyDetailOverlay() {
    this.uiService.loadPropertyDetailOverlay(this.property, this.user);
  }

}