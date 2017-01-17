import { Component, Input, SimpleChanges, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { UiService } from '../../../../../services/ui.service';
import { Developer } from '../../../../../models/aggregate/developer.model';
import { TagService } from '../../../../../services/tag.service';
import { Tag } from '../../../../../models/aggregate/tag.model';

@Component({
	selector: 'developer-list',
	templateUrl: 'developerList.component.html',
	styleUrls: ['developerList.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeveloperListComponent {

	@Input() developers: Developer[];
  @Input() searchString: string;
  @Input() tags: Tag[];
  
	header: string;
	context: string;
	constructor(
		private uiService: UiService,
    private tagService: TagService
  	) {
  		this.header = "Top Developers";
  		this.context = "developer";
  	}

  	public ngOnInit() {
  	}

  	public updateDeveloperDetailPanel(event: Event, developer: Developer) {
      if (event) {
        event.stopPropagation();
        event.preventDefault();
      }
      if (developer) {
  		  this.uiService.updateSearchDetailPanel(developer.id.registrationId, this.context);
      }
  	}

    public addTag(event: Event, developer: Developer) {
      if (event) {
        event.stopPropagation();
        event.preventDefault();
      }
      console.log(developer)
      if (developer && (!this.tags || this.tags.length < 3)) {
        this.tagService.addTag(new Tag({type: 'developer', name: developer.name, id: developer.id.registrationId}));
      }
    }

    public getName(developer: Developer): string {
      if (!developer || !developer.name) return '';
      if (!this.searchString) return developer.name;
      return developer.name.replace(new RegExp(this.searchString, 'ig'), '<span class="highlight">' + this.searchString + '</span>');
    }
}