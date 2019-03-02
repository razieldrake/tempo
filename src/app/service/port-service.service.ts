import { Injectable, ɵSWITCH_IVY_ENABLED__POST_R3__ } from '@angular/core';
import {Port} from '../entity/port';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PortServiceService {

  private ipAPI = "localhost";
  private portAPI = ":8080/";

  private portUrl = "http://"+this.ipAPI+this.portAPI+"ports/";

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Port[]>{
    console.log(this.portUrl);
    return this.http.get<Port[]>(this.portUrl,httpOptions);
}

public getOne(idport: string): Observable<Port>{
  return this.http.get<Port>(this.portUrl+idport,httpOptions);
}

public addOne(port: Port): Observable<Port>{

  return this.http.post<Port>(this.portUrl,port,httpOptions);
}

}