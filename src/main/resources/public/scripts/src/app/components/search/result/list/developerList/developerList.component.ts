import { Component, Input } from '@angular/core';
import { UiService } from '../../../../../services/ui.service';
import { Developer } from '../../../../../models/aggregate/developer.model';

@Component({
	selector: 'developer-list',
	templateUrl: 'developerList.component.html',
	styleUrls: ['developerList.component.scss']
})
export class DeveloperListComponent {

	@Input() developers: Developer[];
	header: string;
	context: string;
	constructor(
		private uiService: UiService
  	) {
  		this.header = "Top Developers";
  		this.context = "developer";
  	}

  	public ngOnInit() {
  	}

  	public updateDeveloperDetailPanel(developer: Developer) {
  		this.uiService.updateSearchDetailPanel(developer.id.registrationId, this.context);
  	}
}