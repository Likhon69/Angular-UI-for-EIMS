import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  formData:User;
  readonly baseUrl= "https://localhost:44321/api/OAuth";

  constructor(private http:HttpClient) { }

  postUser(formData:User){
    return this.http.post(this.baseUrl+'/GetAuthentication',formData);
  }

  getUser(){
    //var tokenHeader = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
    return this.http.get(this.baseUrl+'/GetUser');
  }
}
