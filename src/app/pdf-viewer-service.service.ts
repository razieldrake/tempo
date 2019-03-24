import { Injectable } from '@angular/core';
import { Job } from './entity/job';
import { User } from './entity/user';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class PdfViewerServiceService {

  /*for the pdf controller*/                /*for the logged user = commanditary */
  private ipAPI = "localhost";              private commanditaryUrl:string = "user";
  private portAPI = ":8080/";               
  private idJob: string;
  
  private commanditary:string;

  private urlString = "http://"+this.ipAPI+this.portAPI+"generatePDF/";
  private userUtl = "http://"+this.ipAPI+this.portAPI+this.commanditaryUrl;
  constructor(private http: HttpClient) { }

  public getImage(jobReference: string): Observable<Job>{
    this.idJob  = jobReference;
    if (!jobReference){return null;    }
    this.urlString  = this.ipAPI+this.portAPI+this.idJob;
    return this.http.post<Job>("http://localhost:8080/generatePDF?idJob="+this.idJob,httpOptions);
  }

  public getLoggedUser(){

    return this.http.get<User>(this.userUtl,httpOptions);

  }
}
