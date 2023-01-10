import { Injectable } from '@angular/core';
import { OpenNewAccount, Role, UserLoginDetails } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  openingNewAccount: OpenNewAccount[] = [];

  users: UserLoginDetails[] = [
    { id: 1, username: 'subrata', password: '123', firstName: 'Subrata', lastName: 'Mandal', email:'subrata@gmail.com', contact: '1234567890', role: Role.Admin, balance: 122321 },
    { id: 2, username: 'sam', password: 'sam', firstName: 'Sam', lastName: 'Mandal', email:'sam@gmail.com', contact: '9876543211', role: Role.User, balance: 1540393 }
  ];

  constructor() { }

  getAllUser() {
    return this.users;
  }

  GetNewlyCreatedAccount(_id?: number) {
    let allResult = JSON.parse(localStorage.getItem("openingNewAccount") || '{}');
    let result = null;
    if (allResult.length > 0) {
      if (_id != undefined) {
        result = allResult.filter((x: { id: number; }) => x.id == _id);
      }
      else {
        result = allResult;
      }
      
    }
    return result
  }
}
