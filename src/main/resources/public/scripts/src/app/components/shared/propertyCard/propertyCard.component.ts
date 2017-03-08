import { Component, Input } from '@angular/core';
import { Property } from '../../../models/aggregate/property.model';
import { DisplayProperty } from '../../../models/displayProperty.model';
import { UiService } from '../../../services/ui.service';
import { User } from '../../../models/aggregate/user.model';
import * as _ from 'lodash';

@Component({
	selector: 'property-card',
	templateUrl: 'propertyCard.component.html',
	styleUrls: ['propertyCard.component.scss']
})
export class PropertyCardComponent {

	@Input() property: Property;
  @Input() user: User;

	constructor(
    private uiService: UiService
  ) {
  }

	public ngOnInit() {
	}

  get imageUrl() {
    let id = this.property.id.registrationId; //'3601';
    return `/assets/images/property/prop${id}/propertyImage1.jpg`;
  }

	get displayProperty(): any {
    let displayProperty = new DisplayProperty();
    displayProperty.name = this.getDisplayPropertyName();
    displayProperty.description = this.getDisplayPropertyDescription();
    return displayProperty;
  }

  public loadPropertyDetailOverlay() {
    this.uiService.loadPropertyDetailOverlay(this.property, this.user);
  }


  private getDisplayPropertyName(): string{
    return this.property ? this.property.name : '';
  }

  private getDisplayPropertyDescription(): string{
    return this.property ? this.property.description : '';
  }
  
}