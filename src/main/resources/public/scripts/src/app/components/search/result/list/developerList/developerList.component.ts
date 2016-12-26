import { Component, Input, SimpleChanges, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { UiService } from '../../../../../services/ui.service';
import { Developer } from '../../../../../models/aggregate/developer.model';

@Component({
	selector: 'developer-list',
	templateUrl: 'developerList.component.html',
	styleUrls: ['developerList.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeveloperListComponent {

	@Input() developers: Developer[];
  @Input() searchString: string;
  
	header: string;
	context: string;
	constructor(
		private uiService: UiService,
    private cd: ChangeDetectorRef
  	) {
  		this.header = "Top Developers";
  		this.context = "developer";
  	}

  	public ngOnInit() {
  	}

  	public updateDeveloperDetailPanel(developer: Developer) {
      if (developer) {
  		  this.uiService.updateSearchDetailPanel(developer.id.registrationId, this.context);
      }
  	}

    public getHighlightText(developer: Developer): string {
      console.log('getHighlightText')
      if (!developer || !developer.name || !this.searchString) return '';
      return developer.name.slice(0, this.searchString.length);
    }

    public getNormalText(developer: Developer): string {
      if (!developer || !developer.name) return '';
      if (!this.searchString) return this.uiService.capitalize(developer.name);
      let str = developer.name.slice(this.searchString.length, developer.name.length);
      return this.uiService.format(str);
    }
}