import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../user/login/login.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  constructor(public dialog: MatDialog){}
  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      height: '370px',
      width: '400px',
      disableClose: true
    });
}
}
