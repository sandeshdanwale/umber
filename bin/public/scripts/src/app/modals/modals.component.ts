import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { UiService } from '../services/ui.service';
import { Panel } from '../models/aggregate/ui.model';

@Component({
	selector: 'modals-container',
	templateUrl: 'modals.component.html',
	styleUrls: ['modals.component.scss']
})
export class ModalsComponent {

	activePanels: Observable<Panel[]>;

	constructor(
    private uiService: UiService
    ) {
      this.activePanels = this.uiService.activePanels;
    }
}