import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-variable',
  templateUrl: './template-variable.component.html',
  styleUrls: ['./template-variable.component.css']
})
export class TemplateVariableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  name = ''
  // show(event){
  //   this.name = event.target.value
  // }

  // show(data){
  //   this.name = data.value
  // }

  show(data){
    this.name = data
  }

}
