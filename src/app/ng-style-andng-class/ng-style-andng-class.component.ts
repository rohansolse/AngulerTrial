import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-andng-class',
  templateUrl: './ng-style-andng-class.component.html',
  styleUrls: ['./ng-style-andng-class.component.css']
})
export class NgStyleANDngClassComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  myStyle = {
    width : '150px',
    height : '150px',
    background : 'red',
    border : '2px solid grey'
  }

  changeStyle(){
    this.myStyle.background = 'grey';
    this.myStyle.border = '2px solid black'
  }

  myClasses = {
    box : true,
    border : false,
    circle : false
  }

  changeShape(){
    this.myClasses.border = !this.myClasses.border;
    this.myClasses.circle = !this.myClasses.circle;
  }

}
