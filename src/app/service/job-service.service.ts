import { Injectable} from '@angular/core';
import {Job} from '../entity/job';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class JobServiceService {

  private ipAPI = "localhost";
  private portAPI = ":8080/";

  private jobUrl = "http://"+this.ipAPI+this.portAPI+"jobs/";

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Job[]>{
    if(localStorage.getItem('token')!=null){
    let httpop = {
      headers: new HttpHeaders({ 'token': localStorage.getItem('token')} ),
   };
    return this.http.get<Job[]>(this.jobUrl,httpop);
  } else {

    return this.http.get<Job[]>(this.jobUrl,httpOptions);

  }
}

  public getOne(idjob: string): Observable<Job>{
  return this.http.get<Job>(this.jobUrl+idjob,httpOptions);
  }

  public addOne(job: Job): Observable<Job>{
    

  return this.http.post<Job>(this.jobUrl,job,httpOptions);
  }

  public orderOne(target:string,port:string): Observable<Job>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params: new HttpParams().set('target',target).set('ports',port)
    };
    

     return this.http.post<Job>("http://localhost:8080/jobs/order?target="+target+"&ports="+port,httpOptions);
   

  }

}