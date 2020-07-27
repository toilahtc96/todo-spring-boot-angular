import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/bacsic-authentication.service';
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

  constructor(private router: Router, private hardcodeAuthenticationService: HardcodeAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) { }

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
  handleBasicLogin() {
    this.basicAuthenticationService.executeBasicAuthenticationService(this.username, this.password).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['welcome', this.username])
        this.inValidLogin = false
      },
      error=>{
        console.log(error)
        this.inValidLogin = true
      }
    )
     
   
  }
}
