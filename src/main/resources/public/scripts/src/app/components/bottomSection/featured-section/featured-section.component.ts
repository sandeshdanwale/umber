import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from '../../../models/aggregate/property.model';
import { Panel } from '../../../models/aggregate/ui.model';
import { PropertyService } from '../../../services/property.service';
import * as defaultProperty from '../../../actions/defaultProperty.action';

@Component({
  selector: 'featured-section',
  templateUrl: './featured-section.component.html',
  styleUrls: ['./featured-section.component.scss']
})
export class FeaturedSectionComponent implements OnInit {

  properties: Observable<Property[]>;
  @Input() activePanels: Panel[];
	constructor(
		private propertyService: PropertyService
	) {
		this.properties = this.propertyService.globalProperty;
	}

	public ngOnInit() {
	}

}
