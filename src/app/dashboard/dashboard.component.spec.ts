import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { Router } from '@angular/router';
import { RouterLinkDirectiveStub } from '../../testing/RouterLinkDirectiveStub';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ResponseAreaService } from './ResponseArea.service';
import { EmergenciesService } from './emergencies/emergencies.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        RouterLinkDirectiveStub
      ],
      providers: [
        { provide: Router, useValue: routerSpy },
        ResponseAreaService,
        EmergenciesService
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  let routerLinks;
  let linkDes;

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    linkDes = fixture.debugElement
    .queryAll(By.directive(RouterLinkDirectiveStub));

    routerLinks = linkDes.map(de => de.injector.get(RouterLinkDirectiveStub));

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
