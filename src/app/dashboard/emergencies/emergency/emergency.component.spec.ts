import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyComponent } from './emergency.component';
import { Emergency } from './Emergency';

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
    component.emergency = new Emergency("72", "70", "Fire","Liberty",new Date());
    fixture.detectChanges();
  });

  it('should create', () => {
    //expect(component).toBeTruthy();
  });
});
