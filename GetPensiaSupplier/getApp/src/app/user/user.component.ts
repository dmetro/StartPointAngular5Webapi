import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from './user'



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[] = [];
  error: any;
  constructor(private _dataService: UserService) { }

  ngOnInit() {
    this.getUser()
  }

  getUser() {
    this._dataService.getUsers()
      .subscribe(
      users => {
        this.users = users
        console.log(this.users)
      },
      error => this.error = <any>error);
    // subscribe (users => {this.users = users}, error => this.error = <any>error))


  }

}
