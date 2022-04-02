import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCarComponent } from './current-car.component';

describe('CurrentCarComponent', () => {
  let component: CurrentCarComponent;
  let fixture: ComponentFixture<CurrentCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
