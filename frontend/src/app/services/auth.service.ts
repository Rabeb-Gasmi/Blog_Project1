import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  private url='http://127.0.0.1:3000/author/'

  register(author :any){
    return this.http.post(this.url+'register',author);
  }

  login(author :any){
    return this.http.post(this.url+'login',author);
  }

  isLoggedIn(){
    let token = localStorage.getItem('token')
    if(token){
      return true;
    }else {
      return false;
    }
  }

  getDataFromToken(){
    let token=localStorage.getItem('token');
    if(token){
      let data=JSON.parse(window.atob(token.split('.')[1]))
      return data;
    }
  }

  getById(id:any){
    return this.http.get(this.url+'getbyid/'+id);
  }

}
