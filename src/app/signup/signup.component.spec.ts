import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { SignupComponent } from './signup.component';
// import { Responder } from '../dashboard/Responder';
// class MockAuthService {
//   signup(user: Responder) {
//     return {
//       "cellNumber": "111-111-2222",
//       "firstName": "test",
//       "lastName": "name",
//       "realm": "",
//       "username": "",
//       "email": "test@testemail.com",
//       "emailVerified": false,
//       "id": 8
//     }
//   }
// }

// class MockRouterService {
//   navigate(routeArray: string[]) {
//     return true;
//   }
// }

// class MockValidationService {
  
// }

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('calls the signup API', () => {
  //   component.isFormValid = true;
  //   component.firstName = 'test';
  //   component.lastName = 'test';
  //   component.email = '';
  //   component.phone = '555-555-5555';
  //   component.password = 'abc123';
  //   component.confirmPassword = 'abc123';
  //   component.signup();
  //   expect(component.isFormValid).toBeFalsy();
  // });
});
