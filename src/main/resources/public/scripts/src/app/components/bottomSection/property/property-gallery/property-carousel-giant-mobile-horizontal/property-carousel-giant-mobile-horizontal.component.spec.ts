/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PropertyCarouselGiantMobileHorizontalComponent } from './property-carousel-giant-mobile-horizontal.component';

describe('PropertyCarouselGiantMobileHorizontalComponent', () => {
  let component: PropertyCarouselGiantMobileHorizontalComponent;
  let fixture: ComponentFixture<PropertyCarouselGiantMobileHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyCarouselGiantMobileHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyCarouselGiantMobileHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
