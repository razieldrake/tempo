import { Injectable, ɵSWITCH_IVY_ENABLED__POST_R3__ } from '@angular/core';
import {User} from '../entity/user';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {JwtModule} from '@auth0/angular-jwt';
import { headersToString } from 'selenium-webdriver/http';
import { stringify } from '@angular/compiler/src/util';
import { tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'} ),
};



@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private ipAPI = "localhost";
  private portAPI = ":8080/";
  private paramusername:string;

  private userUrl = "http://"+this.ipAPI+this.portAPI+"users/";

  constructor(private http: HttpClient, private jwt: JwtModule) { }

  public getAll(): Observable<User[]>{
    console.log(this.userUrl);
    return this.http.get<User[]>(this.userUrl,httpOptions);
}

public getOne(iduser: string): Observable<User>{
  return this.http.get<User>(this.userUrl+iduser,httpOptions);
}

public addOne(user: User): Observable<User>{

  console.log("post to http://localhost:8080/admin/adduser"+user.username+user.role+user.password)
  return this.http.post<User>("http://127.0.0.1:8080/admin/adduser",user,httpOptions);
}

public authenticate(username:string, password:string): Observable<HttpResponse<Object>>{
  
  this.paramusername = username.toLocaleLowerCase();
    
    let httpop = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('token')} ),
   };
 
 console.log("alors?");
 return this.http.post<HttpResponse<Object>>("http://localhost:8080/login?username="+this.paramusername+"&password="+password,null,{observe: 'response'})
 .pipe(tap(resp => {const token = resp.headers.get('Authorization');console.log("token is :"+token);}));







  
}


}