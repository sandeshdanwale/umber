import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UiService } from '../services/ui.service';
import { Panel } from '../models/aggregate/ui.model';
import { Property } from '../models/aggregate/property.model';
import { User } from '../models/aggregate/user.model';
import { City } from '../models/aggregate/city.model';

@Component({
	selector: 'modals-container',
	templateUrl: 'modals.component.html',
	styleUrls: ['modals.component.scss']
})
export class ModalsComponent {

	selectedProperty: Observable<Property>;
	nearByProperties: Observable<Property[]>;
	panelInFocus: Observable<Panel>;
	@Input() user: User;
	@Input() activePanels: Panel[];
	private asset: string = '';
	constructor(
    	private uiService: UiService
    ) {
      	this.selectedProperty = this.uiService.selectedProperty;
      	this.nearByProperties = this.uiService.nearByProperties;
      	this.panelInFocus = this.uiService.panelInFocus;
    }

    assetType(type: string) {
    	this.asset = type;
    }
}