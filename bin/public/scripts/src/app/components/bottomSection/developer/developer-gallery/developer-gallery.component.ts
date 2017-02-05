import { Component, Input, OnChanges } from '@angular/core';
import { Developer } from '../../../../models/aggregate/developer.model';
import { Property } from '../../../../models/aggregate/property.model';

@Component({
  selector: 'developer-gallery',
  templateUrl: './developer-gallery.component.html',
  styleUrls: ['./developer-gallery.component.scss']
})
export class DeveloperGalleryComponent {

  @Input() developers: Developer[];
  @Input() properties: Property[];
  private index: number = 0;
  constructor() { }

  ngOnInit() {
  }

  head(index: number) {
  	this.index = index;
  }

}
