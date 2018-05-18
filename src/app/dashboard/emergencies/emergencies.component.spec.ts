import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { EmergenciesComponent } from './emergencies.component';
import { EmergenciesServiceSpy } from '../../../testing/EmergenciesServiceSpy';
import { EmergenciesService } from './emergencies.service';
import { ResponseArea } from '../ResponseArea';
import { Responder } from '../Responder';

describe('EmergenciesComponent', () => {
  let component: EmergenciesComponent;
  let fixture: ComponentFixture<EmergenciesComponent>;
  let esSpy: EmergenciesServiceSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergenciesComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .overrideComponent(EmergenciesComponent, {
      set: {
        providers: [
          { provide: EmergenciesService, useClass: EmergenciesServiceSpy }
        ]
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergenciesComponent);
    esSpy = fixture.debugElement.injector.get(EmergenciesService) as any;
    component = fixture.componentInstance;
    const responseArea = new ResponseArea('Liberty center', '72.5', '74.5', 'Liberty center mall in ohio',
    new Responder('First', 'Last', 'username', 'Cincinnati', 'abc@xyz.com', '111-111-1112' ), 1);
    component.respArea = responseArea;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
    // expect(esSpy.getEmergencies.calls.count()).toBe(1, 'getEmergencies called once');
  });
});
