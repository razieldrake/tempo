import { Injectable} from '@angular/core';
import {Host} from '../entity/host';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class HostServiceService {

  private ipAPI = "localhost";
  private portAPI = ":8080/";

  private hostUrl = "http://"+this.ipAPI+this.portAPI+"hosts/";

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Host[]>{
    return this.http.get<Host[]>(this.hostUrl,httpOptions);
}

public getOne(idhost: string): Observable<Host>{
  return this.http.get<Host>(this.hostUrl+idhost,httpOptions);
}

public addOne(host: Host): Observable<Host>{

  return this.http.post<Host>(this.hostUrl,host,httpOptions);
}

}