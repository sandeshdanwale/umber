import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from '../../../models/aggregate/property.model';
import { Developer } from '../../../models/aggregate/developer.model';
import { Panel } from '../../../models/aggregate/ui.model';
import { PropertyService } from '../../../services/property.service';
import { DeveloperService } from '../../../services/developer.service';
import * as defaultProperty from '../../../actions/defaultProperty.action';

@Component({
  selector: 'featured-section',
  templateUrl: './featured-section.component.html',
  styleUrls: ['./featured-section.component.scss']
})
export class FeaturedSectionComponent implements OnInit {

  properties: Observable<Property[]>;
  developers: Observable<Developer[]>;
  @Input() activePanels: Panel[];
	constructor(
		private propertyService: PropertyService,
		private developerService: DeveloperService
	) {
		this.properties = this.propertyService.globalProperty;
		this.developers = this.developerService.globalDeveloper;
	}

	public ngOnInit() {
	}

}
