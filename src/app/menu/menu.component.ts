import { Component, OnInit } from '@angular/core';
import { HardcodeAuthenticationService } from '../service/hardcode-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private hardcodedAuthenticationService: HardcodeAuthenticationService) { }

  // isUserLoggedIn: boolean = false;
  ngOnInit() {
    // this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLogin();
  }


}
