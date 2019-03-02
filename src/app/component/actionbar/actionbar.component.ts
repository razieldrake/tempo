import { Component, OnInit } from '@angular/core';
import {JobServiceService} from '../../service/job-service.service';
import {Job} from '../../entity/job';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-actionbar',
  templateUrl: './actionbar.component.html',
  styleUrls: ['./actionbar.component.css']
})
export class ActionbarComponent implements OnInit {

  closeResult: string;

  constructor(private modalService: NgbModal, private jobService: JobServiceService) { }

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
