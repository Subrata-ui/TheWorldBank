import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: UserService) { }
  login(_userName: string, _password: string) {
    if (this.userService.getAllUser().find(i => i.username == _userName && i.password == _password)) {
      localStorage.setItem('CurrentUser', JSON.stringify(this.userService.getAllUser().filter(i => i.username == _userName)));
      localStorage.setItem('Role', this.userService.getAllUser().filter(i => i.username == _userName)[0].role);
    }
  }

  logout() {
    localStorage.removeItem('CurrentUser');
    //localStorage.clear();
  }

  isLoggedIn() {
    if (localStorage.getItem("CurrentUser") !== null)
      return true;
    else
    return false;
  }

  getRole() {
    return localStorage.getItem('Role');
  }
}
