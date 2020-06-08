import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ng-switch-adv',
    templateUrl: './ng-switch-adv.component.html',
    styleUrls: ['./ng-switch-adv.component.css']
})
export class NgSwitchAdvComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    currentTab = ''

    openTab(latestTab = ''){
        this.currentTab = latestTab
        console.log(this.currentTab)
    }

}
