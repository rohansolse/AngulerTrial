import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {
    title = "trial";
    text: string = "";
    textSize = 20;
    textClass: string = ""
    setText(event) {
        this.text = event.target.value;
    }
    // setSize(condition){
    //     if(condition == 'inc'){
    //         this.textSize += 1
    //     }
    //     else if(condition == 'dec'){
    //         this.textSize -= 1
    //     }
    // }
    setSize(event){
        this.textSize = event.target.value
    }
    setColor(event){
        this.textClass = event.target.value
    }
}
