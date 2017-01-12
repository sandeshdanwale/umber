import { Component, Input, OnInit, AfterViewInit, SimpleChanges, OnChanges, AfterViewChecked } from '@angular/core';
import { UiService } from '../../../../../services/ui.service';
import { Property } from '../../../../../models/aggregate/property.model';
import { Tag } from '../../../../../models/aggregate/tag.model';
import { User } from '../../../../../models/aggregate/user.model';
import { OrderByPipe } from '../../../../../pipes/generic.pipe';
import * as _ from 'lodash';

@Component({
	selector: 'property-detail-list',
	templateUrl: 'propertyDetailList.component.html',
	styleUrls: ['propertyDetailList.component.scss']
})
export class PropertyDetailListComponent implements OnInit, OnChanges {
	
	@Input() properties: Property[];
  @Input() searchDetailListLoader: boolean;
  @Input() tags: Tag[];
  @Input() user: User;
  
	header: string;
  context: string;
  displayPort: number;
  initialized: boolean = false;

	constructor(
    private uiService: UiService
  ) {
  		this.header = "Featured Properties";
      this.context = 'property';
      this.displayPort = 0;
  }

  	ngOnInit() {
      this.displayPort = 6;
      this.updateProperties(0, this.displayPort);
  	}

    ngOnChanges(changes) {
      if (changes.properties && _.has(changes, 'properties.previousValue.length')
        && changes.properties.previousValue.length != changes.properties.currentValue.length) {
        this.displayPort = 6;
        this.updateProperties(0, this.displayPort);
      }
    }

    public searchMore() {
      this.updateProperties(this.displayPort, this.displayPort + 3);
      this.displayPort += 3;
    }

    public updateProperties(from: number, to: number) {
      let properties = _.slice(_.sortBy(this.properties, p =>  p.name), from, to);
      let ids = _.map(properties, p => p.id.registrationId);
      this.uiService.updateProperties(ids);
    }

}