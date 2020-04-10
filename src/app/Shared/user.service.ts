import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  formData:User;
  readonly baseUrl= "https://localhost:44315/api/OAuth";

  constructor(private http:HttpClient) { }

  postUser(formData:User){
    return this.http.post(this.baseUrl+'/Authenticate',formData);
  }
}
