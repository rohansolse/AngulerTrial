import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ng-for',
    templateUrl: './ng-for.component.html',
    styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    details = [
        {
            name : "rohan",
            email : "rohansolse@gmail.com",
            website : "www.rohansolse.com"
        },
        {
            name : "roshan",
            email : "roshansolse@gmail.com",
            website : "www.roshansolse.com"
        },
        {
            name : "ram",
            email : "ramsolse@gmail.com",
            website : "www.ramsolse.com"
        },
        {
            name : "yash",
            email : "yashlambhate@gmail.com",
            website : "www.yashlambhate.com"
        }
    ]

    currentUser = null

    ShowAndEdit(person){
        this.currentUser = person
        console.log(this.currentUser)
    }

    setValue(event){
        let keyName = event.target.name
        this.currentUser[keyName] = event.target.value
    }
}
