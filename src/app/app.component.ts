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
            qty : 2
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
}