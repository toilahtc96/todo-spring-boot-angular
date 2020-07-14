import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodeAuthenticationService {

  constructor() { }
  authenticate(username, password) {
    if (username === 'htc' && password === '1') {
      sessionStorage.setItem('authenticaterUser', username)
      return true;
    }
    return false;
  }
  isUserLogin() {
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }
  logout() {
    sessionStorage.removeItem('authenticaterUser')
  }
}
