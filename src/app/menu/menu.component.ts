import { Component } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: '../app/menu/menu.component.html'
})


export class MenuComponent {

  // menus1 = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  menus = [
    { route: ['','welcome'], name: 'welcome', moduleId: './sample/welcome', nav: true, title:'Welcome' },
    { route: 'users',         name: 'users',    moduleId: './sample/users/users',    nav: true, title:'Github Users' }
  ];

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  // get diagnostic() { return JSON.stringify(this.model); }

}

class Router {
  
}

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/