import { Component, OnInit } from '@angular/core';
import { Cve } from '../entity/cve';
import { Service } from '../entity/service';
import { Port } from '../entity/port';
import { Host } from '../entity/host';
import { Job } from '../entity/job';
import { PdfViewerServiceService} from '../pdf-viewer-service.service';
import { User } from '../entity/user';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { HostServiceService } from '../service/host-service.service';
import { hostViewClassName } from '@angular/compiler';
import { initServicesIfNeeded } from '@angular/core/src/view';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit {

  private savedjob: Job;
  

  commanditary: User;
 


  constructor(private pdfService: PdfViewerServiceService, private route: ActivatedRoute, private router: Router) { }

  public acceptPDF(){
    var data = document.getElementById('rep');
    html2canvas(data).then(canvas => {
      var imgWidth = 200; 
      var pageHeight = 300; 
      var imgHeight = canvas.height * imgWidth / canvas.width; 
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('MYPdf.pdf'); // Generated PDF
    })
  }
  public generate(idjob:string): void{
    this.pdfService.getImage(idjob).subscribe(job =>{

      this.savedjob = job;
     /* for (var ithost = 0;ithost<job.host.length;ithost++){
        //for each host
        console.log("host number"+job.host[ithost].ip);

        for (var itport = 0;itport<job.host[ithost].ports.length;itport++){
          //for each port in each host
          console.log("Port number: "+job.host[ithost].ports[itport].idPort);

          for (var itservice = 0;itservice<job.host[ithost].ports[itport].services.length;itservice++){
            //for each service in each port of each host
            console.log("Service name"+job.host[ithost].ports[itport].services[itservice].nameService);

            if (job.host[ithost].ports[itport].services[itservice].cve == null){
              console.log("the'rs no cve ont ehs ervices");
            }else{
            for (var itcves = 0;itcves<job.host[ithost].ports[itport].services[itservice].cve.length;itcves++){
              console.log("there 's cve ons ervice");
              console.log("here itn is : "+job.host[ithost].ports[itport].services[itservice].cve[itcves].descCVE);

              console.log("copy object reference value:"+this.savedjob.host[ithost].ports[itport].services[itservice].cve[itcves].idCVE);
            }}
          }
        }

      }*/
    }
      );
  }
/*  public generate(idjob: string): void{

    this.pdfService.getImage(idjob).subscribe(job =>
      {
        this.hs = Array.from(job.host);
        
        for(var index in job.host)
        {
          this.hs[index].ports = Array.from(job.host[index].ports);
          console.log("how many ports"+this.hs[index].ports.length);
          
          for (var port in job.host[index].ports){
            console.log("we ve got the port"+this.hs[index].ports[port].idPort);
            console.log(index);
            console.log(port);
            console.log("we ve got the port"+job.host[index].ports[port].status);
            for (var i = 0; i< job.host[index].ports[port].services.length;i++){
              console.log("iteration"+i);
              console.log("try to gET CVE DEGUG ---- "+job.host[index].ports[port].services[i].cve);
            }
            console.log("we ve got the port"+job.host[index].ports[port].services.pop().cve.toString());
            console.log("how many service in the copy --DBUEG"+this.hs[index].ports[port].services.length);
            this.hs[index].ports[port].services = Array.from(job.host[index].ports[port].services);
            console.log("how many services in the original DEBUG---"+job.host[index].ports[port].services.length);
            
            for (var serviceindex in job.host[index].ports[port].services){
              console.log("we ve got the port with service"+this.hs[index].ports[port].services[serviceindex].nameService);
              console.log(index);console.log(serviceindex);
              console.log(port);
              console.log("DEBUG--got the service"+this.hs[index].ports[port].services[serviceindex].nameService+" ---VS---"+job.host[index].ports[port].services[serviceindex].nameService);
             // this.hs[index].ports[port].services[serviceindex].cves = Array.from(job.host[index].ports[port].services[serviceindex].cves);
              console.log("have you got the cves of the services in correct way?"+job.host[index].ports[port].services[serviceindex].cve);
             if (job.host[index].ports[port].services[serviceindex].cve == null ){
                console.log("DEBUG---there's no cves")
              }else {
                console.log("there's a cves"+job.host[index].ports[port].services[serviceindex].cve.toString());

              }
            }
           //this.hs[index].ports[port].services = Array.from(job.host[index].ports[port].services);
           // console.log("there's services running on port"+this.hs[index].ports[port].services.pop().nameService);
          };
        };
        console.log("got the job"+job.idJob+"hosts azre "+job.host.pop().ip); this.job = job});

    /**
     * temporary set the user for debug reason
    */
   // this.pdfService.getLoggedUser().subscribe(user => this.commanditary = user);
   //this.commanditary = new User();
//}
  ngOnInit() {

    let id =  this.route.snapshot.paramMap.get("idJob");
    this.generate(id);
     //this.route.paramMap.pipe(switchMap((params: ParamMap) => this.pdfService.getImage(params.get('id'))));  
  
  }

}
