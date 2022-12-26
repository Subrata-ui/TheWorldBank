import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OpenNewAccount } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  isUserAdminType: boolean =  true;
  newAccountOpened: OpenNewAccount[] = [];
  displayedColumns: string[] = ['id', 'fullName', 'dateOfBirth', 'action'];
  dataSource : OpenNewAccount[]=[];
  constructor(private authService: AuthService, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.newAccountOpened = this.userService.GetNewlyCreatedAccount();
    this.dataSource = this.newAccountOpened;
    if (localStorage.getItem("Role") === "User") {
      this.isUserAdminType = false;
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['home']);
  }
}
