import { Component, Input, OnInit } from '@angular/core';
import { Property } from '../../../../../models/aggregate/property.model';

@Component({
  selector: 'property-carousel',
  templateUrl: './property-carousel.component.html',
  styleUrls: ['./property-carousel.component.scss']
})
export class PropertyCarouselComponent implements OnInit {
  
  @Input() properties: Property[];
  indexOfHead: number = 0;
  constructor() { }

  ngOnInit() {
  }

  translate(): string {
    let seed = 0;
    let pos = /*this.indexOfHead * 130 +*/ seed;
    return `translateY(${pos}px)`;
  }

  forward(): void {
    if (this.indexOfHead > 0) {
      this.indexOfHead -= 1;
    }
  }

  backward(): void {
    if (this.indexOfHead < this.properties.length - 4) {
      this.indexOfHead += 1;
    }
  }

}
