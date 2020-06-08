import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ng-switch',
    templateUrl: './ng-switch.component.html',
    styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    value = null

    userInput(event) {
        this.value = event.target.value
        console.log(this.value)
        event.target.value = ''
    }
}
