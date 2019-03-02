import { Component, OnInit } from '@angular/core';
import {PortServiceService} from '../../service/port-service.service';
import {Port} from '../../entity/port';


@Component({
  selector: 'app-port-comp',
  templateUrl: './port-comp.component.html',
  styleUrls: ['./port-comp.component.css']
})
export class PortCompComponent implements OnInit {

  ports: Port[];
  selectedPort: Port;
  constructor(private portService: PortServiceService) { }

  public getPorts(): void{

    this.portService.getAll().subscribe(ports => this.ports = ports)
  }
  public getOnePort(port: string ): void{

    this.portService.getOne(port).subscribe(port => this.selectedPort = port);
  }

  ngOnInit() {

    this.getPorts();
  }

}
