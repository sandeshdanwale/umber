import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Developer } from '../../../../../models/aggregate/developer.model';
import { Property } from '../../../../../models/aggregate/property.model';

@Component({
  selector: 'developer-carousel-giant-horizontal',
  templateUrl: './developer-carousel-giant-horizontal.component.html',
  styleUrls: ['./developer-carousel-giant-horizontal.component.scss']
})
export class DeveloperCarouselGiantHorizontalComponent implements OnInit {

  @Input() developers: Developer[];
  @Input() properties: Property[];
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
    if (this.indexOfHead < this.developers.length - 1 ) {
      this.indexOfHead += 1;
      this.head.emit(this.indexOfHead)
    }
  }

}
