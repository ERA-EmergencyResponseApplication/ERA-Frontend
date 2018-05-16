import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationComponent } from './location.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ResponseAreaService } from '../dashboard/ResponseArea.service';

describe('LocationComponent', () => {
  let component: LocationComponent;
  let fixture: ComponentFixture<LocationComponent>;
  let responseAreaServiceStub: Partial<ResponseAreaService>;


  beforeEach(async(() => {
    // stub ResponseAreaService for test purposes
    responseAreaServiceStub = {
      responseAreas: []
    };

    TestBed.configureTestingModule({
      declarations: [ LocationComponent ],
      providers:    [ {provide: ResponseAreaService, useValue: responseAreaServiceStub } ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
