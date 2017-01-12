import {Component, Input, ChangeDetectionStrategy, HostListener } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { UiService } from '../../../services/ui.service';
import { TagService } from '../../../services/tag.service';
import { Panel } from '../../../models/aggregate/ui.model';
import { User } from '../../../models/aggregate/user.model';
import { Property } from '../../../models/aggregate/property.model';
import * as _ from 'lodash';

@Component({
	selector: 'property-detail-overlay',
	templateUrl: 'propertyDetailOverlay.component.html',
	styleUrls: ['propertyDetailOverlay.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyDetailOverlayComponent {

  @Input() property: Property;
  @Input() activePanels: Panel[];
  @Input() user: User;
  
	constructor(
    private uiService: UiService
    ) {
    }

  	public closePropertyDetailOverlay() {
  		this.uiService.closePropertyDetailOverlay();
  	}

    @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(kbdEvent: KeyboardEvent) { 
      if (kbdEvent.key === 'Escape') {
        this.closePropertyDetailOverlay();
      }
    }

    public isPropertyDetailOverlayOpen(): any {
      let overlay = _.head(_.filter(this.activePanels, (p) => p.name === 'propertyDetailOverlay'));
      return overlay && overlay.name;
    }

}