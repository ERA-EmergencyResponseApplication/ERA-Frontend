import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencySelectComponent } from './emergency-select.component';

describe('EmergencySelectComponent', () => {
  let component: EmergencySelectComponent;
  let fixture: ComponentFixture<EmergencySelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencySelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
