import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean {
  constructor(public name: string) { }
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpClient: HttpClient) { }
  executeHelloWorldBeanService() {
    console.log(this.httpClient.get("http://localhost:8080/hello-world-bean/"));
    return this.httpClient.get<HelloWorldBean>("http://localhost:8080/hello-world-bean/")
  }


}
