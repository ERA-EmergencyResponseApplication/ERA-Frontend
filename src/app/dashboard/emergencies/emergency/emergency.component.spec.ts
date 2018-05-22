import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyComponent } from './emergency.component';
import { Emergency } from '../../../models/Emergency';

describe('EmergencyComponent', () => {
  let component: EmergencyComponent;
  let fixture: ComponentFixture<EmergencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyComponent);
    component = fixture.componentInstance;
    component.emergency = new Emergency('Fire', {}, 'Location1', new Date().toISOString(),
    new Date().toISOString(), 1, 1, 2);
    fixture.detectChanges();
  });

  it('should create', () => {
    // expect(component).toBeTruthy();
  });
});
