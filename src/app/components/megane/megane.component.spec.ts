import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeganeComponent } from './megane.component';

describe('MeganeComponent', () => {
  let component: MeganeComponent;
  let fixture: ComponentFixture<MeganeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeganeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeganeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
