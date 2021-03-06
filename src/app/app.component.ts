import { Component } from "@angular/core";

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

    // foodList : string[] = []
    // constructor(){}
    // addFruitInList(fruit){
    //     console.log("food in the list : ", fruit)
    //     this.foodList.push(fruit)
    // }

    // foodArray: string[]=[]
    // insertFood(food){
    //     if(this.foodArray.indexOf(food.target.value) == -1){
    //         this.foodArray.push(food.target.value)
    //         food.target.value = ''
    //     }
    // }
    // deletedFood: string = null
    // deleteFood(foodIndex){
    //     console.log("foodindex : ",foodIndex)
    //     this.deletedFood = this.foodArray[foodIndex]
    //     this.foodArray = this.foodArray.filter((val,index)=> index != foodIndex)
    // }

    qty : number = 1
    addQty(event){
        this.qty = event.target.value
        console.log("P qty : ", this.qty)
        event.target.value = ''
    }

    updateQty(updatedQty){
        console.log("updatedQty : ",updatedQty)
        this.qty = updatedQty
    }
}
