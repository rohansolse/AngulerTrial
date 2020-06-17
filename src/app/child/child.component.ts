import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
    // @Output() foodEvt: EventEmitter<string> = new EventEmitter<string>();

    // @Input() name: string;

    // @Input() list: string[];

    // @Input() msg: any;

    constructor() {}
    
    ngOnInit() {}

    // addFood(event){
    //     console.log(event.target.value, "add in the list")
    //     this.foodEvt.emit(event.target.value)
    //     event.target.value = ''
    // }

    @Input() foodArryInChild: string[];
    @Output() deletFoodEvt: EventEmitter<number> = new EventEmitter<number>()
    deleteItem(index){
        console.log("got this index : ",index)
        this.deletFoodEvt.emit(index)
    }
    
}
