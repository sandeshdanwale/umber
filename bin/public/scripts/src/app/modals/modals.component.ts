import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UiService } from '../services/ui.service';
import { Panel } from '../models/aggregate/ui.model';
import { User } from '../models/aggregate/user.model';
import { City } from '../models/aggregate/city.model';

@Component({
	selector: 'modals-container',
	templateUrl: 'modals.component.html',
	styleUrls: ['modals.component.scss']
})
export class ModalsComponent {

	activePanels: Observable<Panel[]>;
	@Input() user: User;
	constructor(
    	private uiService: UiService
    ) {
      	this.activePanels = this.uiService.activePanels;
    }
}