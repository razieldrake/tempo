import { Injectable, ɵSWITCH_IVY_ENABLED__POST_R3__ } from '@angular/core';
import {User} from '../entity/user';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private ipAPI = "localhost";
  private portAPI = ":8080/";

  private userUrl = "http://"+this.ipAPI+this.portAPI+"users/";

  constructor(private http: HttpClient) { }

  public getAll(): Observable<User[]>{
    console.log(this.userUrl);
    return this.http.get<User[]>(this.userUrl,httpOptions);
}

public getOne(iduser: string): Observable<User>{
  return this.http.get<User>(this.userUrl+iduser,httpOptions);
}

public addOne(user: User): Observable<User>{

  return this.http.post<User>(this.userUrl,user,httpOptions);
}

}