import { Component, Input, OnInit } from '@angular/core';
import { Property } from '../../../../models/aggregate/property.model';
import { User } from '../../../../models/aggregate/user.model';

@Component({
  selector: 'property-gallery',
  templateUrl: './property-gallery.component.html',
  styleUrls: ['./property-gallery.component.scss']
})
export class PropertyGalleryComponent implements OnInit {
  
  @Input() properties: Property[];
  @Input() user: User;
  private index: number = 0;
  constructor() { }

  ngOnInit() {
  }

  head(index: number) {
  	this.index = index;
  }

}
