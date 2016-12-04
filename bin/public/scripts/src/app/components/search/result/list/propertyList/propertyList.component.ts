import {Component} from '@angular/core';
import { PropertyService } from '../../../../../services/property.service';
import { Observable } from 'rxjs/Observable';
import { Property } from '../../../../../models/aggregate/property.model';

@Component({
	selector: 'property-list',
	templateUrl: 'propertyList.component.html',
	styleUrls: ['propertyList.component.scss']
})
export class PropertyListComponent {

	
	properties: Observable<Property[]>;
	header: string;
	constructor(
		private propertyService: PropertyService
  	) {
  		this.properties = this.propertyService.property;
  		this.header = "Featured Properties";
  	}

  	public ngOnInit() {
  	}
}