import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

    @Input() name: string;

    @Input() list: string[];

    @Input() msg: Number;

    constructor() {

    }
    
    ngOnInit() {
        console.log("0000 :",this.msg)
    }
}
