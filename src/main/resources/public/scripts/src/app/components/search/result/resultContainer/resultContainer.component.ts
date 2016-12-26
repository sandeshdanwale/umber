import { Component, OnChanges, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UiService } from '../../../../services/ui.service';
import { SearchDetailPanel } from '../../../../models/aggregate/ui.model';
import { Property } from '../../../../models/aggregate/property.model';
import { Landmark } from '../../../../models/aggregate/landmark.model';
import { Developer } from '../../../../models/aggregate/developer.model';
import { PropertyService } from '../../../../services/property.service';
import { LandmarkService } from '../../../../services/landmark.service';
import { DeveloperService } from '../../../../services/developer.service';
import { Panel } from '../../../../models/aggregate/ui.model';
import * as _ from 'lodash';

@Component({
	selector: 'result-container',
	templateUrl: 'resultContainer.component.html',
	styleUrls: ['resultContainer.component.scss']
})
export class ResultContainerComponent implements OnChanges{

	@Input() activePanels: Panel[];
  @Input() searchString: string;
	activeSearchDetailPanel: Observable<SearchDetailPanel>;
	properties: Observable<Property[]>;
	landmarks: Observable<Landmark[]>;
	developers: Observable<Developer[]>;
	isResultDetailListActive: boolean = false;

	constructor(
		private propertyService: PropertyService,
		private landmarkService: LandmarkService,
		private developerService: DeveloperService,
		private uiService: UiService
  	) {
  		this.properties = this.propertyService.property;
  		this.landmarks = this.landmarkService.landmark;
  		this.developers = this.developerService.developer;
  		this.activeSearchDetailPanel = this.uiService.activeSearchDetailPanel;
  		this.isResultDetailListActive = this.isResultDetailListOpen();
  	}

  	public ngOnChanges() {
  		this.properties = this.propertyService.property;
  		this.landmarks = this.landmarkService.landmark;
  		this.developers = this.developerService.developer;
  		this.activeSearchDetailPanel = this.uiService.activeSearchDetailPanel;
  		this.isResultDetailListActive = this.isResultDetailListOpen();
  	}

  	public isResultDetailListOpen(): any {
      let detailList = _.head(_.filter(this.activePanels, (p) => p.name === 'searchDetailList'));
      return detailList && detailList.name;
    }

}