
// import * as $ from 'jquery';
import { Component } from '@angular/core';
// import { jquery } from 'jquery';
// declare var require:(moduleId:string) => any;
// var BootstrapDialog = require("app/assets/bootstrap-dialog/bootstrap-dialog") => any;
// import {BootstrapDialog} from "app/assets/bootstrap-dialog/bootstrap-dialog";
declare var $:any;
declare var BootstrapDialog:any; // Magic

@Component({
  selector: 'my-app',
  template: `
  <menu></menu>

  <div (click)="displayToastr()">Display Toastr</div>`
//   template: `
//   <h1>Hello11 {{name}}</h1>
//   <menu></menu>
//   <hero-form></hero-form>

//   <div (click)="displayToastr()">Display Toastr</div>`,
})

export class AppComponent  {
  debugger;
  name = 'wdawd1';
  displayToastr() {
    //toastr.info('messag11e');
    BootstrapDialog.alert('I want banana!');
    console.log($('div'))
  }
 }
