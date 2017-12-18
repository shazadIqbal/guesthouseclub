import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestHouseComponent } from './guest-house.component';

describe('GuestHouseComponent', () => {
  let component: GuestHouseComponent;
  let fixture: ComponentFixture<GuestHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
