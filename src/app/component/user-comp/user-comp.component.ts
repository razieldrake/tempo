import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../../service/user-service.service';
import {User} from '../../entity/user';
import { TokenStorage} from '../../../app/entity/token.storage';
import { stringify } from '@angular/core/src/util';
import { JsonPipe } from '@angular/common';

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
  public auth(username:string,password:string):void{

   
    this.userService.authenticate(username,password).subscribe((resp) => {
      console.log("TOKEN : "+resp.headers.get('Authorization'))
      console.log("BODY :"+resp.body)
      localStorage.setItem('token',resp.headers.get('Authorization'))
    },
    (resp) => {

      console.log("error")
      console.log(resp)
    }
    );
    //this.userService.authenticate(username,password).pipe(tap(res => {localStorage.setItem('token',res.)}))
    
  }

  ngOnInit() {

    this.getAll();
  }

}
