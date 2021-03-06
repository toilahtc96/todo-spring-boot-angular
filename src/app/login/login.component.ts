import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodeAuthenticationService } from '../service/hardcode-authentication.service';

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

  //Router
  //DI

  constructor(private router: Router, private hardcodeAuthenticationService: HardcodeAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    if (this.hardcodeAuthenticationService.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username])
      this.inValidLogin = false

    } else {
      this.inValidLogin = true
    }
  }
}
