import { Injectable } from '@angular/core';
import { Role, User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    { id: 1, username: 'admin', password: 'admin', firstName: 'Admin', lastName: 'User', role: Role.Admin },
    { id: 2, username: 'user', password: 'user', firstName: 'Normal', lastName: 'User', role: Role.User }
];
  constructor() { }

  getAllUser(){    
    return this.users;
  }
}
