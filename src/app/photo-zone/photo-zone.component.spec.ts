import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoZoneComponent } from './photo-zone.component';

describe('PhotoZoneComponent', () => {
  let component: PhotoZoneComponent;
  let fixture: ComponentFixture<PhotoZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoZoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
