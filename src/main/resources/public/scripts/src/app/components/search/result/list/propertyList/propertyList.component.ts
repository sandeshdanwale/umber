import { Component, Input } from '@angular/core';
import { UiService } from '../../../../../services/ui.service';
import { TagService } from '../../../../../services/tag.service';
import { Property } from '../../../../../models/aggregate/property.model';
import { Tag } from '../../../../../models/aggregate/tag.model';
import { OrderByPipe } from '../../../../../pipes/generic.pipe';

@Component({
	selector: 'property-list',
	templateUrl: 'propertyList.component.html',
	styleUrls: ['propertyList.component.scss']
})
export class PropertyListComponent {
	
	@Input() properties: Property[];
  @Input() searchString: string;
  @Input() tags: Tag[];

	header: string;
  context: string;
	constructor(
    private uiService: UiService,
    private tagService: TagService
  ) {
  		this.header = "Featured Properties";
      this.context = 'property';
  }

  	public ngOnInit() {
  	}

  	public updatePropertyDetailPanel(event: Event, property: Property) {
      if (event) {
        event.stopPropagation();
        event.preventDefault();
      }
      if (property) {
  		  this.uiService.updateSearchDetailPanel(property.id.registrationId, this.context);
  	  }
      return;
    }

    public addTag(event: Event, property: Property) {
      if (event) {
        event.stopPropagation();
        event.preventDefault();
      }
      if (property && (!this.tags || this.tags.length < 3)) {
        this.tagService.addTag(new Tag({type: 'property', name: property.name, id: property.id.registrationId}));
      }
    }

    public getName(property: Property): string {
      if (!property || !property.name) return '';
      if (!this.searchString) return property.name;
      return property.name.replace(new RegExp(this.searchString, 'ig'), '<span class="highlight">' + this.searchString + '</span>');
    }
}