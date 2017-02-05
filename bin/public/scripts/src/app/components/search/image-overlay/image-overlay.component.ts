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

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(kbdEvent: KeyboardEvent) { 
    if (kbdEvent.key === 'Escape') {
      this.closeImageOverlay();
    }
  }

  get imageUrl() {
    return `/assets/images/property/prop${this.id}/propertyImage1.jpg`;
  }

  get asset1Url() {
    if (this.asset === 'property') {
      return `/assets/images/property/prop${this.id}/${this.asset}Image2.jpg`;
    } else {
      return `/assets/images/property/prop${this.id}/${this.asset}Image1.jpg`;
    }
  }

  get asset2Url() {
    if (this.asset === 'property') {
      return `/assets/images/property/prop${this.id}/${this.asset}Image3.jpg`;
    } else {
      return `/assets/images/property/prop${this.id}/${this.asset}Image2.jpg`;
    }
  }

  get asset3Url() {
    if (this.asset === 'property') {
      return `/assets/images/property/prop${this.id}/propertyImage4.jpg`;
    } else {
      return `/assets/images/property/prop${this.id}/${this.asset}Image3.jpg`;
    }
  }

  public isImageOverlayOpen(): any {
    let overlay = _.head(_.filter(this.activePanels, (p) => p.name === 'imageOverlay'));
    return overlay && overlay.name;
  }

}
