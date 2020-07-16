import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
// import {AppComponent} from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  //activatedRoute
  username = ''
  welcomeMessageFromService: string
  constructor(private route: ActivatedRoute,
    private welcomeDataService: WelcomeDataService) { }

  ngOnInit() {
    this.username = this.route.snapshot.params['name']
    console.log(this.route.snapshot.params['name'])
  }

  getWelcomeMessage() {
    this.welcomeDataService.executeHelloWorldBeanService();

    this.welcomeDataService.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    // console.log("last line of executeHelloWorldBeanService")
  }


  handleSuccessfulResponse(response) {
    this.welcomeMessageFromService = response.name
    console.log(response.name)
  }
  handleErrorResponse(err) {
    this.welcomeMessageFromService = err.error.message
  }
}
