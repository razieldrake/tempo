import { Component, OnInit } from '@angular/core';
import {HostServiceService} from '../../service/host-service.service';
import {Host} from '../../entity/host';

@Component({
  selector: 'app-host-comp',
  templateUrl: './host-comp.component.html',
  styleUrls: ['./host-comp.component.css']
})
export class HostCompComponent implements OnInit {


  hosts: Host[];
  selectedHost: Host;


  constructor(private hostService: HostServiceService) { }
  public getHosts(): void{

    this.hostService.getAll().subscribe(hosts => this.hosts = hosts)
  }
  public getOneHost(host: string ): void{

    this.hostService.getOne(host).subscribe(host => this.selectedHost = host);
  }

  public ngOnInit() {

    this.getHosts();
    
  }

  

}
