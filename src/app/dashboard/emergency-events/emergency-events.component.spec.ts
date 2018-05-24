import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyEventsComponent } from './emergency-events.component';

describe('EmergencyEventsComponent', () => {
  let component: EmergencyEventsComponent;
  let fixture: ComponentFixture<EmergencyEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencyEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
