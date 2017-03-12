/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DeveloperCarouselGiantMobileHorizontalComponent } from './developer-carousel-giant-mobile-horizontal.component';

describe('DeveloperCarouselGiantMobileHorizontalComponent', () => {
  let component: DeveloperCarouselGiantMobileHorizontalComponent;
  let fixture: ComponentFixture<DeveloperCarouselGiantMobileHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperCarouselGiantMobileHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperCarouselGiantMobileHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
