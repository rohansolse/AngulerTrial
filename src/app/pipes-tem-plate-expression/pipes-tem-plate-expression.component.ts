import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pipes-tem-plate-expression',
    templateUrl: './pipes-tem-plate-expression.component.html',
    styleUrls: ['./pipes-tem-plate-expression.component.css']
})
export class PipesTemPlateExpressionComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    Uname: string = "ROHAN"
    Lname: string = "rohan"
    title: string = "rohan solse"
    today = new Date()
    // num = 2.167
    num = 2.78
    num2 = 1.78
    amount = 234

    person = {
        name: "Rohan",
        age: 20,
        salary: 30000
    }
    word = "mynameisrohan"
    words = ["rohan", "roshan", "ram", "rohit"]
}
