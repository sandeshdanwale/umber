import {Component, Input, ChangeDetectionStrategy, HostListener} from '@angular/core';
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


  @Input() activePanels: Panel[];

	constructor(
    private uiService: UiService
    ) {
    }

    ngOnInit() {
      console.log(this.activePanels)
    }

  	public closeSearchOverlay() {
  		this.uiService.closeSearchOverlay();
  	}

    @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(kbdEvent: KeyboardEvent) { 
      if (kbdEvent.key === 'Escape') {
        this.closeSearchOverlay();
      }
    }

    public isSearchOverlayOpen(): any {
      let overlay = _.head(_.filter(this.activePanels, (p) => p.name === 'searchOverlay'));
      return overlay && overlay.name;
    }
}