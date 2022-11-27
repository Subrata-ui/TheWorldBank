import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  food: string | undefined;
  loginForm!: FormGroup;
  submitted = false;
  invalidLogin = false;
  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    public router: Router,
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    ;
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
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
      // After success redirect to dashboard page.
      this.dialogRef.close();
      this.router.navigate(['dashboard']);
           
      
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
