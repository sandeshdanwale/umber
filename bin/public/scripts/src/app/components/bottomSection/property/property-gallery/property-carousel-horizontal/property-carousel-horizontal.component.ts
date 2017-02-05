import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Property } from '../../../../../models/aggregate/property.model';

@Component({
  selector: 'property-carousel-horizontal',
  templateUrl: './property-carousel-horizontal.component.html',
  styleUrls: ['./property-carousel-horizontal.component.scss']
})
export class PropertyCarouselHorizontalComponent implements OnInit {

  @Input() properties: Property[];
  @Input() indexOfHead: number;
  @Output() head = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  translate(): string {
    let seed = 0;
    let pos = /*this.indexOfHead * 130 +*/ seed;
    return `translateX(${pos}px)`;
  }

  forward(): void {
    if (this.indexOfHead > 0) {
      this.indexOfHead -= 1;
      this.head.emit(this.indexOfHead);
    }
  }

  select(index: number): void {
    this.indexOfHead = index;
    this.head.emit(this.indexOfHead)
  }

  backward(): void {
    if (this.indexOfHead < this.properties.length - 1 ) {
      this.indexOfHead += 1;
      this.head.emit(this.indexOfHead);
    }
  }

}
