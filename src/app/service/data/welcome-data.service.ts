import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    // console.log(this.httpClient.get("http://localhost:8080/hello-world-bean/"));
    return this.httpClient.get<HelloWorldBean>("http://localhost:8080/hello-world-bean/")
  }

  excuteHelloWorldBeanServiceWithParam(username: string) {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // })
    return this.httpClient.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/${username}`,
      // { headers}
      );
  }

  // createBasicAuthenticationHttpHeader() {
  //   let username = 'htc'
  //   let password = '1'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

  //   return basicAuthHeaderString;
  // }
}
