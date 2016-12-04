import { Component, Input } from '@angular/core';
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
  	) {
  		this.header = "Top Developers";
  		this.context = "developer";
  	}

  	public ngOnInit() {
  	}
}