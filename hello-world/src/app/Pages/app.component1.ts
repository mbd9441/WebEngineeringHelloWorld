import { Component } from '@angular/core';
declare var require: any;

@Component({
  templateUrl: './app.component1.html',
  styleUrls: ['./app.component1.css']
})
export class AppComponent1 {
  title = 'Hello World';
  imageurl = require("../../assets/images/IndianFalls.jpg");
}
