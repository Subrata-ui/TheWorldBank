import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { CommonService } from 'src/app/services/common.service';

export interface resetPwdForm {
  email: string;
  contact: number;
}
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  public resetPwdForm!: FormGroup;
  submitted = false;
  recoveredPassword: string;

  constructor(
    // public dialogRef: MatDialogRef<ForgotPasswordComponent>,
    private location: Location,
    private authService: AuthService,
    private commonService: CommonService,
    
  ) { }
  ngOnInit() {
    this.resetPwdForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      contact: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
    })
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.resetPwdForm.controls[controlName].hasError(errorName);
  }

  get f() { return this.resetPwdForm.controls; }
  public resetPassword = (resetPwdForm: any) => {
    this.submitted = true;

    // stop here if form is invalid
    if (this.resetPwdForm.invalid) {
      //this.resetPwdForm = true;
      return;
    }
    else {
      //this.resetPwdForm = false;

      this.authService.resetPassword(this.f.email.value, this.f.contact.value);
      if (localStorage.getItem("ResetPassword") !== null) {
        var item = JSON.parse(localStorage.getItem("ResetPassword") || '{}');
        this.recoveredPassword = "Your current password is:"+ item[0].password;
        localStorage.removeItem("ResetPassword");

        // this.dialogRef.close();
      }
      else{
        this.recoveredPassword = "Invalid user credentials.";
      }

    }
  }  
  public onCancel = () => {
    this.location.back();
  }
}