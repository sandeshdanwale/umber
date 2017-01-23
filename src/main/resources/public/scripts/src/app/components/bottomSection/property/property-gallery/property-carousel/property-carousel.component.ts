import { Component, Input, OnInit } from '@angular/core';
import { Property } from '../../../../../models/aggregate/property.model';

@Component({
  selector: 'property-carousel',
  templateUrl: './property-carousel.component.html',
  styleUrls: ['./property-carousel.component.scss']
})
export class PropertyCarouselComponent implements OnInit {
  
  @Input() properties: Property[];
  indexOfHead: number = 1;
  constructor() { }

  ngOnInit() {
  }

  translate(index: number): string {
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
    return `translateY(${pos}px)`;
  }

}
