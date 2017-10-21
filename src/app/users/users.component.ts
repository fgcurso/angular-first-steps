import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users : Array<any>;

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.getAll().subscribe(users => {
      this.users = users.json();
    });
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
  }

}
