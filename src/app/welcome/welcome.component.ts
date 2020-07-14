import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import {AppComponent} from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  //activatedRoute
  username = ''
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.username = this.route.snapshot.params['name']
    console.log(this.route.snapshot.params['name'])
  }

}
