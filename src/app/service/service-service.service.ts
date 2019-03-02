import { Injectable } from '@angular/core';
import {Service} from '../entity/service';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ServiceServiceService {

  private ipAPI = "localhost";
  private portAPI = ":8080/";

  private serviceUrl = "http://"+this.ipAPI+this.portAPI+"services/";

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Service[]>{
    console.log(this.serviceUrl);
    return this.http.get<Service[]>(this.serviceUrl,httpOptions);
}

public getOne(idService: string): Observable<Service>{
  return this.http.get<Service>(this.serviceUrl+idService,httpOptions);
}

public addOne(service: Service): Observable<Service>{

  return this.http.post<Service>(this.serviceUrl,service,httpOptions);
}

}
