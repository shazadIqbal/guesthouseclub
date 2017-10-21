import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGuesthouseComponent } from './manage-guesthouse.component';

describe('ManageGuesthouseComponent', () => {
  let component: ManageGuesthouseComponent;
  let fixture: ComponentFixture<ManageGuesthouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageGuesthouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageGuesthouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
