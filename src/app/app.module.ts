import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CveCompComponent } from './component/cve-comp/cve-comp.component';
import { ServiceCompComponent } from './component/service-comp/service-comp.component';
import { PortCompComponent } from './component/port-comp/port-comp.component';
import { HostCompComponent } from './component/host-comp/host-comp.component';
import { JobCompComponent } from './component/job-comp/job-comp.component';
import { UserCompComponent } from './component/user-comp/user-comp.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { ActionbarComponent } from './component/actionbar/actionbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CveCompComponent,
    ServiceCompComponent,
    PortCompComponent,
    HostCompComponent,
    JobCompComponent,
    UserCompComponent,
    NavigationComponent,
    ActionbarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
