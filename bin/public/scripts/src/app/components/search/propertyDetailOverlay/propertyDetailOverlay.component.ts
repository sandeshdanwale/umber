import { Component, Input, Output, OnInit, ChangeDetectionStrategy, HostListener, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
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
  @Output() assetType = new EventEmitter<string>();
  indexOfHead: number = 0;
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

  asset(type: string) {
    this.assetType.emit(type);
  }

  translate(): string {
    let seed = 140;
    let pos = this.indexOfHead * -270 + seed;
    return `translateX(${pos}px)`;
  }

  forward(): void {
    if (this.indexOfHead > 0) {
      this.indexOfHead -= 1;
    }
  }

  backward(): void {
    if (this.indexOfHead < this.nearByProperties.length - 4) {
      this.indexOfHead += 1;
    }
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