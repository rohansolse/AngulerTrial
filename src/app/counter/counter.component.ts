import { Component, OnInit } from '@angular/core';

let timer = 0

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count = 0
  constructor() { 
    timer += 1
    this.count = timer
  }

  ngOnInit() {
  }

}
