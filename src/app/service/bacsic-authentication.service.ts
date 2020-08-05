import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { API_URL } from '../app.constants';


export const TOKEN = 'token'
export const AUTHENTICATEDUSER = 'authenticaterUser'
@Injectable({
  providedIn: 'root'
})
// export const TOKEN = 
// export const AUTHENTICATED_USER= 
export class BasicAuthenticationService {

  constructor(private httpClient: HttpClient) { }

  executeBasicAuthenticationService(username, password) {


    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    return this.httpClient.get<AuthenticationBean>(`${API_URL}/basicauth`,
      { headers }).pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATEDUSER, username)
            sessionStorage.setItem(TOKEN, basicAuthHeaderString)
            return data;
          }
        )
      );
  }

  createBasicAuthenticationHttpHeader() {

  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATEDUSER)
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN)
  }

  isUserLogin() {
    let user = sessionStorage.getItem(AUTHENTICATEDUSER)
    return !(user === null)
  }
  logout() {
    sessionStorage.removeItem(AUTHENTICATEDUSER)
    sessionStorage.removeItem(TOKEN)
  }

}

export class AuthenticationBean {
  constructor(public message: string) { }
}
