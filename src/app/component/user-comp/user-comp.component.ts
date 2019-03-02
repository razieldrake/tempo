import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../../service/user-service.service';
import {User} from '../../entity/user';

@Component({
  selector: 'app-user-comp',
  templateUrl: './user-comp.component.html',
  styleUrls: ['./user-comp.component.css']
})

export class UserCompComponent implements OnInit {

  users:User[];
  selectedUser: User;
  constructor(private userService: UserServiceService) { }

  public getAll():void{
    this.userService.getAll().subscribe(users => this.users = users);
  }

  public getOne(user: string):void{
    this.userService.getOne(user).subscribe(user => this.selectedUser = user);
  }

  ngOnInit() {

    this.getAll();
  }

}
