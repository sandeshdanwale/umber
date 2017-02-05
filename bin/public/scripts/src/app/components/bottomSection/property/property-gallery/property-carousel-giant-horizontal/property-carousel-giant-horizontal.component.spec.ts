/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PropertyCarouselGiantHorizontalComponent } from './property-carousel-giant-horizontal.component';

describe('PropertyCarouselGiantHorizontalComponent', () => {
  let component: PropertyCarouselGiantHorizontalComponent;
  let fixture: ComponentFixture<PropertyCarouselGiantHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyCarouselGiantHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyCarouselGiantHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
