import { Component, OnInit } from '@angular/core';
import {ServiceServiceService} from '../../service/service-service.service';
import {Service} from '../../entity/service';

@Component({
  selector: 'app-service-comp',
  templateUrl: './service-comp.component.html',
  styleUrls: ['./service-comp.component.css']
})
export class ServiceCompComponent implements OnInit {

  services: Service[];
  selectedService:Service;

  constructor(private serviceService: ServiceServiceService) { }

  public getServices():void{
    this.serviceService.getAll().subscribe(services => this.services = services);
  }
  public getOneService(service:string):void{
    this.serviceService.getOne(service).subscribe(service => this.selectedService = service);
  }
  
  ngOnInit() {

    this.getServices();
  }

}
