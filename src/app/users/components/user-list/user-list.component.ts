import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: any;


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers()
    // this.userService.getUsers().subscribe(users =>{
    //   console.log(users);
    //   this.users = users;

    // });
    }

}
