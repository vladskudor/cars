import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeCarsComponent } from './like-cars.component';

describe('LikeCarsComponent', () => {
  let component: LikeCarsComponent;
  let fixture: ComponentFixture<LikeCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeCarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
