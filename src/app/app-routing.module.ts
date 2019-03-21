import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CveCompComponent } from './component/cve-comp/cve-comp.component';
import { ServiceCompComponent } from './component/service-comp/service-comp.component';
import { PortCompComponent } from './component/port-comp/port-comp.component';
import { HostCompComponent } from './component/host-comp/host-comp.component';
import { JobCompComponent } from './component/job-comp/job-comp.component';
import { UserCompComponent } from './component/user-comp/user-comp.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';


const routes:Routes = [
  {path: 'cves',component:CveCompComponent},
  {path: 'services',component:ServiceCompComponent},
  {path: 'ports',component:PortCompComponent},
  {path: 'hosts',component:HostCompComponent},
  {path: 'jobs',component:JobCompComponent},
  {path: 'users',component:UserCompComponent},
  {path: 'pdfviewer',component:PdfViewerComponent},
  {path: '',redirectTo: '/users',pathMatch:'full'}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
