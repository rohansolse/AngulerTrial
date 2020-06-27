import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {

  @Input() listTemplate : TemplateRef<any>;
  @Input() newUpdate = {}
  constructor() { }

  ngOnInit() {
  }

}
