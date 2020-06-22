import { Component } from "@angular/core";
import { Product } from "./product"

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {
    data: Product[] = [
        {
            name : "mobile",
            price : 12000,
            qty : 1
        },
        {
            name : "laptop",
            price : 32000,
            qty : 1
        },
        {
            name : "bike",
            price : 82000,
            qty : 1
        }
    ]
    cartBucket: Product[] = []
    totalCartPrize: number = 0
    
    updateCart(payload){
        console.log("payload : ",payload)
        if(payload.addedToCart){
            this.cartBucket.push(payload.product)
            this.totalCartPrize = this.totalCartPrize + (payload.product.price * payload.product.qty)
        }
        else{
            this.cartBucket = this.cartBucket.filter(item=>item !== payload.product)
            this.totalCartPrize = this.totalCartPrize - (payload.product.price * payload.product.qty)
        }
    }
}