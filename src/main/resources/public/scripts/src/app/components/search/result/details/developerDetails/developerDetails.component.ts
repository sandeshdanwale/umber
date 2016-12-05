import { Component, Input } from '@angular/core';
import { SearchDetailPanel } from '../../../../../models/aggregate/ui.model';
import { Developer } from '../../../../../models/aggregate/developer.model';
import * as _ from 'lodash';

@Component({
	selector: 'developer-details',
	templateUrl: 'developerDetails.component.html',
	styleUrls: ['developerDetails.component.scss']
})
export class DeveloperDetailsComponent {

	@Input() developers: Developer[];
	@Input() activeSearchDetailPanel: SearchDetailPanel;
	developer: Developer;
	constructor(
  	) {
  	}

  	ngOnInit() {
  		console.log(this.developers)
  		this.developer = _.head(_.filter(this.developers, (p) => p.id.registrationId === this.activeSearchDetailPanel.entityId));
  	}

  	ngOnChanges() {
  		console.log('changes')
  		this.developer = _.head(_.filter(this.developers, (p) => p.id.registrationId === this.activeSearchDetailPanel.entityId));
  	}
}