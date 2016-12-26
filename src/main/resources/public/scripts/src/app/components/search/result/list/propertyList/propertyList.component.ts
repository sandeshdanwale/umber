import { Component, Input } from '@angular/core';
import { UiService } from '../../../../../services/ui.service';
import { Property } from '../../../../../models/aggregate/property.model';
import { OrderByPipe } from '../../../../../pipes/generic.pipe';

@Component({
	selector: 'property-list',
	templateUrl: 'propertyList.component.html',
	styleUrls: ['propertyList.component.scss']
})
export class PropertyListComponent {
	
	@Input() properties: Property[];
  @Input() searchString: string;
  
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
      if (property) {
  		  this.uiService.updateSearchDetailPanel(property.id.registrationId, this.context);
  	  }
    }

    public getHighlightText(property: Property): string {
      if (!property || !property.name || !this.searchString) return '';
      return property.name.slice(0, this.searchString.length);
    }

    public getNormalText(property: Property): string {
      if (!property || !property.name) return '';
      if (!this.searchString) return this.uiService.capitalize(property.name);
      let str = property.name.slice(this.searchString.length, property.name.length);
      return this.uiService.format(str);
    }
}