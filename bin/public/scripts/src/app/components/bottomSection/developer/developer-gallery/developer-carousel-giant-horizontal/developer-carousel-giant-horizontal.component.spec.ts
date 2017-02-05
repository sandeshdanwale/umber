/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DeveloperCarouselGiantHorizontalComponent } from './developer-carousel-giant-horizontal.component';

describe('DeveloperCarouselGiantHorizontalComponent', () => {
  let component: DeveloperCarouselGiantHorizontalComponent;
  let fixture: ComponentFixture<DeveloperCarouselGiantHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperCarouselGiantHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperCarouselGiantHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
