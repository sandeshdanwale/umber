import { Component, Input } from '@angular/core';
import { UiService } from '../../../../../services/ui.service';
import { Property } from '../../../../../models/aggregate/property.model';
import { OrderByPipe } from '../../../../../pipes/orderBy.pipe';

@Component({
	selector: 'property-list',
	templateUrl: 'propertyList.component.html',
	styleUrls: ['propertyList.component.scss']
})
export class PropertyListComponent {
	
	@Input() properties: Property[];
	header: string;
  context: string;
	constructor(
    private uiService: UiService
  ) {
  		this.header = "Featured Properties";
      this.context = 'property';
  }

  	public ngOnInit() {
  	}

  	public updatePropertyDetailPanel(property: Property) {
  		this.uiService.updateSearchDetailPanel(property.id.registrationId, this.context);
  	}
}