import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor() {}

  ngOnInit() {

    let numero = 10;
    //debugger;

    numero = 20;

    numero = 30;

    numero = 0;

    console.log('Hola Mundo con Ionic');
  }

}
