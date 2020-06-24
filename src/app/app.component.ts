import { Component } from "@angular/core";  

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {
    customers: any[] = [
        {name : "rohan", paid : true, price : 244},
        {name : "roshan",  paid : false, price : 250},
        {name : "rohit", paid : true, price : 200}
    ]
    rohan = { name : 'rohan', size : 300}
    roshan = { name : 'roshan', size : 200}
}