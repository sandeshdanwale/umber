import {Component, Input, OnInit, ChangeDetectionStrategy, HostListener } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { UiService } from '../../../services/ui.service';
import { TagService } from '../../../services/tag.service';
import { Panel } from '../../../models/aggregate/ui.model';
import { User } from '../../../models/aggregate/user.model';
import { AddressType } from '../../../models/aggregate/aggregate.model';
import { Property } from '../../../models/aggregate/property.model';
import * as _ from 'lodash';

@Component({
	selector: 'property-detail-overlay',
	templateUrl: 'propertyDetailOverlay.component.html',
	styleUrls: ['propertyDetailOverlay.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyDetailOverlayComponent implements OnInit {

  @Input() property: Property;
  @Input() activePanels: Panel[];
  @Input() user: User;
  @Input() nearByProperties: Property[];
  indexOfHead: number = 1;
	constructor(
    private uiService: UiService
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    console.log(changes)
  }

	public closePropertyDetailOverlay() {
		this.uiService.closePropertyDetailOverlay();
	}

  translate(index: number): void {
    let pos1 = [150, 200, 250, 300, 2000, 2000, 2000, 2000];
    let pos2 = [-2000, -90, -40, 10, 60, 2000, 2000, 2000];
    let pos3 = [-2000, -2000, -330, -280, -230, -180, 2000, 2000];
    let pos4 = [-2000, -2000, -2000, -570, -520, -470, -420, 2000];
    let pos: number;
    switch(this.indexOfHead) {
      case 1:
        pos = pos1[index];
        break;
      case 2:
        pos = pos2[index];
        break;
      case 3:
        pos = pos3[index];
        break;
      case 4:
        pos = pos4[index];
        break;
    }
    return `translateX(${pos}px)`;
  }

  forward(): void {
    this.indexOfHead = this.indexOfHead > 4 ? 4 : this.indexOfHead + 1
  }

  backward(): void {
    this.indexOfHead = this.indexOfHead < 2 ? 1 : this.indexOfHead - 1
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