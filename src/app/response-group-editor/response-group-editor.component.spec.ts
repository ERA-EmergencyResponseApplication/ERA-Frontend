import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseGroupEditorComponent } from './response-group-editor.component';

describe('ResponseGroupEditorComponent', () => {
  let component: ResponseGroupEditorComponent;
  let fixture: ComponentFixture<ResponseGroupEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseGroupEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseGroupEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
