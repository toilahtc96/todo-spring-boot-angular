import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'htc'
  password = ''
  errorMessage = 'Invalid Credentials'
  inValidLogin = false

  constructor() { }

  ngOnInit() {
  }

  handleLogin() {
    if (this.username === '' && this.password === '') {
      this.inValidLogin = false
    } else {
      this.inValidLogin = true
    }
  }
}
