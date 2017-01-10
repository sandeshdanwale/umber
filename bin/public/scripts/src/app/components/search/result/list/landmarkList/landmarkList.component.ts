import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { UiService } from '../../../../../services/ui.service';
import { TagService } from '../../../../../services/tag.service';
import { Landmark } from '../../../../../models/aggregate/landmark.model';
import { Tag } from '../../../../../models/aggregate/tag.model';

@Component({
	selector: 'landmark-list',
	templateUrl: 'landmarkList.component.html',
	styleUrls: ['landmarkList.component.scss']
})
export class LandmarkListComponent implements OnInit, OnChanges {

	@Input() landmarks: Landmark[];
  @Input() searchString: string;
  @Input() tags: Tag[];

	header: string;
	context: string;
	constructor(
		private uiService: UiService,
    private tagService: TagService
  	) {
  		this.header = "Popular Landmarks";
  		this.context = 'landmark';
  	}

  	public ngOnInit() {
  	}

    public ngOnChanges(changes) {
      console.log(changes)
    }

  	public updateLandmarkDetailPanel(event: Event, landmark: Landmark) {
      if (event) {
        event.stopPropagation();
        event.preventDefault();
      }
      if (landmark) {
  		  this.uiService.updateSearchDetailPanel(landmark.id.registrationId, this.context);
  	  }
    }

    public addTag(event: Event, landmark: Landmark) {
      if (event) {
        event.stopPropagation();
        event.preventDefault();
      }
      if (landmark && (!this.tags || this.tags.length < 3)) {
        this.tagService.addTag(new Tag({type: 'landmark', name: landmark.name, id: landmark.id.registrationId}));
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