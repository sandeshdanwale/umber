import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Property } from '../../../../../models/aggregate/property.model';
import { User } from '../../../../../models/aggregate/user.model';

@Component({
  selector: 'property-carousel-giant-horizontal',
  templateUrl: './property-carousel-giant-horizontal.component.html',
  styleUrls: ['./property-carousel-giant-horizontal.component.scss']
})
export class PropertyCarouselGiantHorizontalComponent implements OnInit {
  
  @Input() properties: Property[];
  @Input() user: User;
  @Input() indexOfHead: number;
  @Output() head = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  translate(): string {
    let seed = 250;
    let pos = this.indexOfHead * -900 + seed;
    return `translateX(${pos}px)`;
  }

  forward(): void {
    if (this.indexOfHead > 0) {
      this.indexOfHead -= 1;
      this.head.emit(this.indexOfHead)
    }
  }

  backward(): void {
    if (this.indexOfHead < this.properties.length - 1 ) {
      this.indexOfHead += 1;
      this.head.emit(this.indexOfHead)
    }
  }
}
