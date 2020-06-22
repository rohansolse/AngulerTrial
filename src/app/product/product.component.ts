import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product'

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    @Input() productData: Product;
    @Output() updateCartEvt = new EventEmitter<any>()
    isAddedToCart: boolean = false
    incQty() {
        this.productData.qty += 1
    }

    decQty() {
        if (this.productData.qty > 1) {
            this.productData.qty -= 1
        }
    }

    updateCart(){
        this.isAddedToCart = !this.isAddedToCart
        this.updateCartEvt.emit({
            addedToCart : this.isAddedToCart,
            product : this.productData
        })
    }

}
