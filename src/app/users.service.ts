import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users = [];

  constructor() { }

  addUser(user) {
    if (this.users.indexOf(user) === -1) {
      this.users = this.users.concat(user);
    }
  }

  getUsers() {
    return this.users;
  }

}
