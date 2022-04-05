import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  /**
   * get all user
   */
  getUsers(){

    return  this.http.get(`${this.apiUrl}?par_page=15`);

  }
  /**
   * get a single user by username
   */
  getUser(username: string){
    return  this.http.get(`${this.apiUrl}/${username}`);

  }

}
