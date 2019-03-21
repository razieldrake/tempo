import { Component, OnInit } from '@angular/core';
import {JobServiceService} from '../../service/job-service.service';
import {UserServiceService} from '../../service/user-service.service';
import {Job} from '../../entity/job';
import {User} from '../../entity/user';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { templateSourceUrl } from '@angular/compiler';


@Component({
  selector: 'app-actionbar',
  templateUrl: './actionbar.component.html',
  styleUrls: ['./actionbar.component.css']
})
export class ActionbarComponent implements OnInit {

  closeResult: string;

  constructor(private modalService: NgbModal, private jobService: JobServiceService, private userService: UserServiceService) { }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;console.log({result});
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  public Order(jobName:string,target:string,port:string):void{
    if(!jobName || !target || !port){return ;}
      console.log("ordering"+target+" on port : "+port);
    this.jobService.orderOne(target,port).subscribe(job => {console.log(job+"pushed! ")});

  }
  public AddUser(username:string,password:string,role:string):void{
    if(!username || !password || !role){return;}
      console.log("adding new user : "+username+" at Role :"+role);
      
      
      this.userService.addOne({username,password,role} as User).subscribe(user => {console.log(user.username+" : pushed in role : "+user.role)});
  }

  

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  ngOnInit() {
  }

}
