import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {
    data : string
    passValue({target}){
        let {value} = target
        console.log(value)
        this.data = value
    }
}
