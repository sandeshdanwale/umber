import { Component, Input } from '@angular/core';
import { UiService } from '../../../../../services/ui.service';
import { Property } from '../../../../../models/aggregate/property.model';
import { OrderByPipe } from '../../../../../pipes/generic.pipe';

@Component({
	selector: 'property-detail-list',
	templateUrl: 'propertyDetailList.component.html',
	styleUrls: ['propertyDetailList.component.scss']
})
export class PropertyDetailListComponent {
	
	@Input() properties: Property[];
	header: string;
  context: string;
  displayPort: number;

	constructor(
    private uiService: UiService
  ) {
  		this.header = "Featured Properties";
      this.context = 'property';
      this.displayPort = 3;
  }

  	public ngOnInit() {
  	}

    public searchMore() {
      this.displayPort += 3;
    }
}