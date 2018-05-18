import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationComponent } from './location.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ResponseAreaServiceSpy } from '../../testing/ResponseAreaServiceSpy';
import { ResponseAreaService } from '../dashboard/ResponseArea.service';

describe('LocationComponent', () => {
  let component: LocationComponent;
  let fixture: ComponentFixture<LocationComponent>;
  let rasSpy: ResponseAreaServiceSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .overrideComponent(LocationComponent, {
      set: {
        providers: [
          { provide: ResponseAreaService, useClass: ResponseAreaServiceSpy }
        ]
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationComponent);
    rasSpy = fixture.debugElement.injector.get(ResponseAreaService) as any;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(rasSpy.getResponseAreas.calls.count()).toBe(1, 'getResponseAreas called once');
  });
});
