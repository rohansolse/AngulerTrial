import { Component } from "@angular/core";  
import { directiveCreate } from "@angular/core/src/render3/instructions";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {
    history = []
    update = {}
    updateRepo(dir,msg){
        console.log("00 : ",dir,msg)
        this.history.push({
            name : dir,
            isFile : dir.includes('.'),
            time : new Date()
        })

        this.update = {
            name : dir,
            msg,
            history : this.history
        }
    }
}