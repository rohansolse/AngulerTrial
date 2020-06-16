import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
    @Output() foodEvt: EventEmitter<string> = new EventEmitter<string>();

    // @Input() name: string;

    // @Input() list: string[];

    // @Input() msg: any;

    constructor() {}
    
    ngOnInit() {}

    addFood(event){
        console.log(event.target.value, "add in the list")
        this.foodEvt.emit(event.target.value)
        event.target.value = ''
    }

}
