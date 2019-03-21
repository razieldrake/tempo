import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {JwtModule} from '@auth0/angular-jwt';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
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
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { LoginComponent } from './login/login.component';

/*
 *  a function to get the token . Granted by JxwtModule
 */

 export function tokenGetter(){
   return localStorage.getItem('token');
 }
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
    ActionbarComponent,
    PdfViewerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
   // NgbModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config:{
        tokenGetter: tokenGetter,
        headerName: 'Authorization',
        authScheme: 'Bearer',
        whitelistedDomains: ['localhost:8080','localhost:4200'],
        blacklistedRoutes:['SecHub.com']
      }
    })
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
