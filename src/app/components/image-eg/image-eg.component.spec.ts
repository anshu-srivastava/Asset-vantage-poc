import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageEgComponent } from './image-eg.component';

describe('ImageEgComponent', () => {
  let component: ImageEgComponent;
  let fixture: ComponentFixture<ImageEgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageEgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageEgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
