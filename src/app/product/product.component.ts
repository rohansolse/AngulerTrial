import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent  {

    constructor() { }

    ngOnInit() {
    }
    @Input() qty: number
    @Output() qtyChange = new EventEmitter<number>()
    itemPrize: number = 15
    
    incQty() {
        this.qty = Number(this.qty) + 1
        console.log("inc : ", this.qty)
        this.updateQty()
    }
    decQty() {
        this.qty = Number(this.qty) - 1
        console.log("dec : ", this.qty)
        this.updateQty()
    }
    updateQty(){
        this.qtyChange.emit(this.qty)
    }
}
