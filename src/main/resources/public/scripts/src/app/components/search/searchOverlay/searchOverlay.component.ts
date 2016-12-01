import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { UiService } from '../../../services/ui.service';
import { Panel } from '../../../models/aggregate/ui.model';
import * as _ from 'lodash';

@Component({
	selector: 'search-overlay',
	templateUrl: 'searchOverlay.component.html',
	styleUrls: ['searchOverlay.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchOverlayComponent {

	//activePanels: Observable<Panel[]>;

  @Input() activePanels: Panel[];

	constructor(
    private uiService: UiService
    ) {
      //this.activePanels = this.uiService.activePanels;
    }

    ngOnInit() {
      console.log(this.activePanels)
    }

  	public closeSearchOverlay() {
  		this.uiService.closeSearchOverlay();
  	}

    public isSearchOverlayOpen(): any {
      let overlay = _.head(_.filter(this.activePanels, (p) => p.name === 'searchOverlay'));
      return overlay && overlay.name;
    }
}