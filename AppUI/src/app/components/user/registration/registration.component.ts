import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { RegisterFormvalidationService } from 'src/app/services/register-formvalidation.service';


export interface UserForCreation {
  acNumber: number;
  cifNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: Date;
  mobile: string;
  password: string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public userForm!: FormGroup;
  submitted = false;

  constructor(
    private location: Location,
    private customValidator: RegisterFormvalidationService
  ) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      acNumber: new FormControl('', [Validators.required, Validators.maxLength(11)]),
      cifNumber: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      dateOfBirth: new FormControl('', Validators.required),
      mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
      terms: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    }, { validators: this.matchingPasswords }
    );
  }

  matchingPasswords: ValidatorFn = (c: AbstractControl): ValidationErrors | null => {
    const password = c.get('password');
    const confirmPassword = c.get('confirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      this.userForm.controls['confirmPassword'].setErrors({ 'mismatchedPasswords': true });
      return { mismatchedPasswords: true };
    }

    return null;
  };

  public hasError = (controlName: string, errorName: string) => {
    return this.userForm.controls[controlName].hasError(errorName);
  }
  public createUser = (userFormValue: any) => {
    if (this.userForm.valid) {
      this.executeUserCreation(userFormValue);
    }
  }

  private executeUserCreation = (userFormValue: {
    acNumber: number;
    cifNumber: string;
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: Date;
    mobile: string;
    password: string;
  }) => {
    let user: UserForCreation = {
      acNumber: userFormValue.acNumber,
      cifNumber: userFormValue.cifNumber,
      firstName: userFormValue.firstName,
      lastName: userFormValue.lastName,
      email: userFormValue.email,
      dateOfBirth: userFormValue.dateOfBirth,
      mobile: userFormValue.mobile,
      password: userFormValue.password,
    }
  }

  public onCancel = () => {
    this.location.back();
  }
}
