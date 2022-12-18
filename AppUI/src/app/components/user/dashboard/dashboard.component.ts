import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  isUserAdminType: boolean =  true;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem("Role") === "User") {
      this.isUserAdminType = false;
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['home']);
  }
}
