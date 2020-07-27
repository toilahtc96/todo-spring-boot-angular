import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private httpClient: HttpClient) { }

  executeBasicAuthenticationService(username, password) {


    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    return this.httpClient.get<AuthenticationBean>(`http://localhost:8080/basicauth`,
      { headers }).pipe(
        map(
          data => {
            sessionStorage.setItem('authenticaterUser', username)
            sessionStorage.setItem('token', basicAuthHeaderString)
            return data;
          }
        )
      );
  }

  createBasicAuthenticationHttpHeader() {

  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticaterUser')
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem('token')
  }

  isUserLogin() {
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }
  logout() {
    sessionStorage.removeItem('authenticaterUser')
    sessionStorage.removeItem('token')
  }

}

export class AuthenticationBean {
  constructor(public message: string) { }
}
