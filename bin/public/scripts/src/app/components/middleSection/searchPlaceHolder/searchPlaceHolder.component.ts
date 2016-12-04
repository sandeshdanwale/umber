import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { UiService } from '../../../services/ui.service';
import { Panel } from '../../../models/aggregate/ui.model';

@Component({
	selector: 'search-place-holder',
	templateUrl: 'searchPlaceHolder.component.html',
	styleUrls: ['searchPlaceHolder.component.scss']
})
export class SearchPlaceHolderComponent {

	activePanels: Observable<Panel[]>;

  constructor(
    private uiService: UiService
    ) {
      this.activePanels = this.uiService.activePanels;
    }

  	public OpenSearchOverlay() {
  		this.uiService.loadSearchOverlay();
  	}
}