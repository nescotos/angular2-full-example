import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent implements OnInit {

  constructor() {
    console.log('Hi, im the constructor')
  }

  ngOnInit() {
    console.log('Hi, im the interface')
  }

}
