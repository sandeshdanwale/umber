import { Component, Input, OnInit, HostListener } from '@angular/core';
import { UiService } from '../../../services/ui.service';
import { TagService } from '../../../services/tag.service';
import { Panel } from '../../../models/aggregate/ui.model';
import { User } from '../../../models/aggregate/user.model';
import { Property } from '../../../models/aggregate/property.model';
import * as _ from 'lodash';

@Component({
  selector: 'image-overlay',
  templateUrl: './image-overlay.component.html',
  styleUrls: ['./image-overlay.component.scss']
})
export class ImageOverlayComponent implements OnInit {

  @Input() property: Property;
  @Input() activePanels: Panel[];
  @Input() user: User;
  @Input() asset: string;
  indexOfHead: number = 0;
  constructor(
  	private uiService: UiService
  ) { 
  }

  ngOnInit() {
  }

  public closeImageOverlay() {
		this.uiService.closeImageOverlay();
  }

  get id(): string {
    return '3601';//this.property.id.registrationId;
  }

  translate(): string {
    let seed = 125;
    let pos = this.indexOfHead * -1300 + seed;
    return `translateX(${pos}px)`;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(kbdEvent: KeyboardEvent) { 
    if (kbdEvent.key === 'Escape') {
      this.closeImageOverlay();
    }
  }

  forward(): void {
    if (this.indexOfHead > 0) {
      this.indexOfHead -= 1;
    }
  }

  backward(): void {
    if (this.indexOfHead < this.configs.length - 1 ) {
      this.indexOfHead += 1;
    }
  }

  setHead(index: number) {
    this.indexOfHead = index;
  }

  get currentAsset() {
    return this.configs[this.indexOfHead].type === this.asset ? this.asset : this.configs[this.indexOfHead].type
  }

  get configs() {
    return _.union([{type: 'property'}], this.property.configs.configs);
  }

  getImageUrl(type: string) {
    return `/assets/images/property/prop${this.id}/propertyImage1.jpg`;
  }

  getAsset1Url(type: string) {
    if (this.currentAsset === 'property') {
      return `/assets/images/property/prop${this.id}/${this.currentAsset}Image2.jpg`;
    } else {
      return `/assets/images/property/prop${this.id}/${this.currentAsset}Image1.jpg`;
    }
  }

  getAsset2Url(type: string) {
    if (this.currentAsset === 'property') {
      return `/assets/images/property/prop${this.id}/${this.currentAsset}Image3.jpg`;
    } else {
      return `/assets/images/property/prop${this.id}/${this.currentAsset}Image2.jpg`;
    }
  }

  getAsset3Url(type: string) {
    if (this.currentAsset === 'property') {
      return `/assets/images/property/prop${this.id}/propertyImage4.jpg`;
    } else {
      return `/assets/images/property/prop${this.id}/${this.currentAsset}Image3.jpg`;
    }
  }

  public isImageOverlayOpen(): any {
    let overlay = _.head(_.filter(this.activePanels, (p) => p.name === 'imageOverlay'));
    return overlay && overlay.name;
  }

}
