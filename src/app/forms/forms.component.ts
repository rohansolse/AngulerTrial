import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }
    person = {
        name: '',
        email: '',
        company: '',
        salary: ''
    }
    isSubmitted = false
    setValue(event) {
        const keyName = event.target.name
        const keyValue = event.target.value
        console.log(keyName, " : ", keyValue)
        this.person[keyName] = keyValue
    }

    submitData() {
        this.isSubmitted = true
        for (const key in this.person){
            console.log("---- :",this.person[key])
            if(this.person[key].trim().length == 0){
                alert(`${key} should not be blank`)
                this.isSubmitted = false
                return;
            }
        }
        console.log(this.person)
    }

    resetForm(){
        this.person = {
            name: '',
            email: '',
            company: '',
            salary: ''
        }
        this.isSubmitted = false
    }

}
