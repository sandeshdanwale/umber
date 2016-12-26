import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { UiService } from '../../../../../services/ui.service';
import { Landmark } from '../../../../../models/aggregate/landmark.model';

@Component({
	selector: 'landmark-list',
	templateUrl: 'landmarkList.component.html',
	styleUrls: ['landmarkList.component.scss']
})
export class LandmarkListComponent implements OnInit, OnChanges {

	@Input() landmarks: Landmark[];
  @Input() searchString: string;
  
	header: string;
	context: string;
	constructor(
		private uiService: UiService
  	) {
  		this.header = "Popular Landmarks";
  		this.context = 'landmark';
  	}

  	public ngOnInit() {
  	}

    public ngOnChanges(changes) {
      console.log(changes)
    }

  	public updateLandmarkDetailPanel(landmark: Landmark) {
      if (landmark) {
  		  this.uiService.updateSearchDetailPanel(landmark.id.registrationId, this.context);
  	  }
    }

    public getHighlightText(landmark: Landmark): string {
      if (!landmark || !landmark.name || !this.searchString) return '';
      return landmark.name.slice(0, this.searchString.length);
    }

    public getNormalText(landmark: Landmark): string {
      if (!landmark || !landmark.name) return '';
      if (!this.searchString) return this.uiService.capitalize(landmark.name);
      let str = landmark.name.slice(this.searchString.length, landmark.name.length);
      return this.uiService.format(str);
    }
}