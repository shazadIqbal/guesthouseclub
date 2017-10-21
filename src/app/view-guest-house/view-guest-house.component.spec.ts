import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGuestHouseComponent } from './view-guest-house.component';

describe('ViewGuestHouseComponent', () => {
  let component: ViewGuestHouseComponent;
  let fixture: ComponentFixture<ViewGuestHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGuestHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGuestHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
