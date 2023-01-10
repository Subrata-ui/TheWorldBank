import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CommonService } from 'src/app/services/common.service';
import { LoginComponent } from '../user/login/login.component';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  title = 'angular-material-modals';
  loggedInUserName: string;
  isUserLoggedIn = false;
  ecomServices: any;
  constructor(public dialog: MatDialog,
    private commonService: CommonService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.commonService.opLoginClickedEvent
      .subscribe((data: string) => {
        this.loggedInUserName = data;
        this.isUserLoggedIn = true;
      });

    if (localStorage.getItem("CurrentUser") !== null) {
      this.ecomServices = JSON.parse(localStorage.getItem('CurrentUser') || '{}');
      this.isUserLoggedIn = true;
      this.loggedInUserName = this.ecomServices[0].firstName;
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      height: '370px',
      width: '400px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['home']);
    this.isUserLoggedIn = false;
  }
}
