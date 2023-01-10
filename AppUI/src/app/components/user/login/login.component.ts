import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  food: string;
  loginForm!: FormGroup;
  submitted = false;
  invalidLogin = false;

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.invalidLogin = true;;
      return;
    }
    else {
      this.invalidLogin = false;

      this.authService.login(this.f.userName.value, this.f.password.value);
      if (localStorage.getItem("CurrentUser") !== null) {
        this.router.navigate(['dashboard']);
        var item = JSON.parse(localStorage.getItem("CurrentUser") || '{}');
        this.commonService.LoginClickedEvent(item[0].firstName);
        this.dialogRef.close();
      }
      else
        this.invalidLogin = true;
    }
  }
  public navigateToRegistration(): void {
    this.dialogRef.close();
    this.router.navigate(['registration']);

  }
  public navigateToForgotPassword(): void {
    this.dialogRef.close();
    this.router.navigate(['forgot-password']);

  }
  public navigateToFAQPage(): void {
    this.dialogRef.close();
    this.router.navigate(['faq-page']);

  }
}
