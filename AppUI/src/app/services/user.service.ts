import { Injectable } from '@angular/core';
import { OpenNewAccount, Role, UserLoginDetails } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  openingNewAccount: OpenNewAccount[] = [];

  users: UserLoginDetails[] = [
    { id: 1, username: 'admin', password: 'admin', firstName: 'Admin', lastName: 'User', role: Role.Admin },
    { id: 2, username: 'user', password: 'user', firstName: 'Normal', lastName: 'User', role: Role.User }
  ];

  constructor() { }

  getAllUser() {
    return this.users;
  }

  OpenNewAccount(newAccountInfo:any) {
    this.openingNewAccount.push(newAccountInfo);
  }

  GetNewlyCreatedAccount(){
    return this.openingNewAccount;
  }
}
