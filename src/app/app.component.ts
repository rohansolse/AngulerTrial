import { Component } from "@angular/core";  

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {
    // isLoggedIn: boolean = false
    // data: string[] = ["rohan","roshan"]
    constructor(){
    }
    show: boolean = false
    update(){
        this.show = !this.show
    }

}