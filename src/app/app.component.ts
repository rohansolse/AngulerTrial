import { Component } from "@angular/core";
import { ThrowStmt } from "@angular/compiler";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {
    // data : string = null
    // passValue({target}){
    //     let {value} = target
    //     console.log(value)
    //     this.data = value
    // }
    // heroList : string[] = []
    // isValueAdded : Number = 0
    // addHero(event){
    //     let value = event.target.value
    //     console.log(value)
    //     event.target.value = ''
    //     if(this.heroList.indexOf(value) == -1){
    //         this.heroList.push(value)
    //         this.isValueAdded = 1
    //     }
    //     else{
    //         this.isValueAdded = 2
    //     }
    // }

    foodList : string[] = []
    constructor(){}
    addFruitInList(fruit){
        console.log("food in the list : ", fruit)
        this.foodList.push(fruit)
    }
}
