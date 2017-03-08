import { Component, Input } from '@angular/core';
import { User } from '../../../models/aggregate/user.model';
import { Developer } from '../../../models/aggregate/developer.model';

@Component({
	selector: 'developerCard',
	templateUrl: 'developerCard.component.html',
	styleUrls: ['developerCard.component.scss']
})
export class DeveloperCardComponent {

	@Input() developer: Developer;
    @Input() user: User;
	constructor(
  	) {
  		
  	}

  	public ngOnInit() {
  	}
}