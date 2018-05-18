import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterLinkDirectiveStub } from '../../testing/RouterLinkDirectiveStub';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        RouterLinkDirectiveStub
      ],
      providers: [
        { provide: Router, useValue: routerSpy }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  let routerLinks;
  let linkDes;

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    linkDes = fixture.debugElement
    .queryAll(By.directive(RouterLinkDirectiveStub));

    routerLinks = linkDes.map(de => de.injector.get(RouterLinkDirectiveStub));

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
      expect(component).toBeTruthy();
      expect(routerLinks.length).toBe(3, 'should have 3 routerLinks');
  });

});
