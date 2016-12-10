import { Component, Input } from '@angular/core';
import { SearchDetailPanel } from '../../../../../models/aggregate/ui.model';
import { Developer } from '../../../../../models/aggregate/developer.model';
import { Property } from '../../../../../models/aggregate/property.model';
import * as _ from 'lodash';

@Component({
	selector: 'developer-details',
	templateUrl: 'developerDetails.component.html',
	styleUrls: ['developerDetails.component.scss']
})
export class DeveloperDetailsComponent {

	@Input() developers: Developer[];
  @Input() properties: Property[];
	@Input() activeSearchDetailPanel: SearchDetailPanel;
	developer: any;/*[{"name": null, "id": 200, "registrationId" : "200"},
  {"name": null, "id": 200, "registrationId" : "200"}];*/
  setProperties: any;
	constructor(
  	) {
  	}

  	ngOnInit() {
  	//onsole.log(this.developers)
  		this.developer = this.developers ? _.head(_.filter(this.developers, (p) => {
        let id = p.id ? p.id.registrationId : p.developerId ? p.developerId.registrationId : '';
        return id === this.activeSearchDetailPanel.entityId;
      })) : null;
      this.setProperties = this.properties ? this.properties.slice(0, 2) : null;
  	}

  	ngOnChanges() {
  		console.log('changes')
  		//this.developer = _.head(_.filter(this.developers, (p) => p.id.registrationId === this.activeSearchDetailPanel.entityId));
  	}
}