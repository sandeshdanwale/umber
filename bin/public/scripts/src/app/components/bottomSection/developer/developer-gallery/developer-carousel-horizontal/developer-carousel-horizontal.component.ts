import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Developer } from '../../../../../models/aggregate/developer.model';

@Component({
  selector: 'developer-carousel-horizontal',
  templateUrl: './developer-carousel-horizontal.component.html',
  styleUrls: ['./developer-carousel-horizontal.component.scss']
})
export class DeveloperCarouselHorizontalComponent implements OnInit {

  @Input() developers: Developer[];
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
    if (this.indexOfHead < this.developers.length - 1 ) {
      this.indexOfHead += 1;
      this.head.emit(this.indexOfHead);
    }
  }

}
