import { Component, OnInit, Injectable } from '@angular/core';
import { ValidationService } from '../services/validation.service';
import { Responder } from '../dashboard/Responder';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Injectable()
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: [
    './signup.component.css',
    '../login/login.component.css',
    '../responder/responder.component.css'
  ]
})
export class SignupComponent implements OnInit {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  firstNameError: string;
  lastNameError: string;
  emailError: string;
  passwordError: string;
  confirmPasswordError: string;
  phoneError: string;
  isFormValid = true;

  constructor(
    private validationService: ValidationService,
    private authService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
  }

  signup() {
    if (!this.isFormValid) {
      this.isFormValid = true;
      this.firstNameError = null;
      this.lastNameError = null;
      this.emailError = null;
      this.phoneError = null;
      this.passwordError = null;
      this.confirmPasswordError = null;
    }
    if (this.firstName && this.firstName.trim().length === 0 && !this.validationService.validateName(this.firstName)) {
      this.isFormValid = false;
      this.firstNameError = 'Please enter a valid first name';
    }

    if (this.lastName && this.lastName.trim().length === 0 && !this.validationService.validateName(this.lastName)) {
      this.isFormValid = false;
      this.lastNameError = 'Please enter a valid last name';
    }

    if (!this.email || this.email.trim().length === 0) {
      this.isFormValid = false;
      this.emailError = 'Email is required';
    } else if (!this.validationService.validateEmail(this.email)) {
      this.isFormValid = false;
      this.emailError = 'Please enter a valid email';
    }

    if (!this.phone || this.phone.trim().length === 0) {
      this.isFormValid = false;
      this.phoneError = 'Phone is required';
    } else if (!this.validationService.validatePhone(this.phone)) {
      this.isFormValid = false;
      this.phoneError = 'Please enter a valid phone';
    }

    if (!this.password && this.password.trim().length === 0) {
      this.isFormValid = false;
      this.passwordError = 'Password is required';
    }

    if (!this.confirmPassword || this.confirmPassword.trim().length === 0) {
      this.isFormValid = false;
      this.confirmPasswordError = 'Please re-enter the password';
    } else if (!this.validationService.validateConfirmPassword(this.password, this.confirmPassword)) {
      this.isFormValid = false;
      this.confirmPasswordError = 'Passwords must match in both the fields';
    }

    if (this.isFormValid) {
      const newUser = new Responder(this.firstName, this.lastName, null, null, this.email, this.phone, this.password, 0);
      this.authService.signup(newUser)
      .then((response) => {
        if (response) {
          this.router.navigate(['/']);
        }
      });
    }
  }

}
