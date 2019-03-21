import { Component, OnInit } from '@angular/core';
import { Cve } from '../entity/cve';
import { Service } from '../entity/service';
import { Port } from '../entity/port';
import { Host } from '../entity/host';
import { Job } from '../entity/job';


@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
