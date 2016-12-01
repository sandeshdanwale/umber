import {Component} from '@angular/core';
import { DeveloperService } from '../../../../../services/developer.service';
import { Observable } from 'rxjs/Observable';
import { Developer } from '../../../../../models/aggregate/developer.model';

@Component({
	selector: 'developer-list',
	templateUrl: 'developerList.component.html',
	styleUrls: ['developerList.component.scss']
})
export class DeveloperListComponent {

	developers: Observable<Developer[]>;
	header: string;
	constructor(
		private developerService: DeveloperService
  	) {
  		this.developers = this.developerService.developer;
  		this.header = "Top Developers";
  	}

  	public ngOnInit() {
  	}
}