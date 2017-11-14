import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Developer } from '../../../../../models/aggregate/developer.model';
import { Property } from '../../../../../models/aggregate/property.model';
import { User } from '../../../../../models/aggregate/user.model';

@Component({
  selector: 'developer-carousel-giant-mobile-horizontal',
  templateUrl: './developer-carousel-giant-mobile-horizontal.component.html',
  styleUrls: ['./developer-carousel-giant-mobile-horizontal.component.scss']
})
export class DeveloperCarouselGiantMobileHorizontalComponent implements OnInit {

  @Input() developers: Developer[];
  @Input() properties: Property[];
  @Input() user: User;
  @Input() indexOfHead: number;
  @Output() head = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  translate(): string {
    let seed = 0;
    let pos = this.indexOfHead * -300 + seed;
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
