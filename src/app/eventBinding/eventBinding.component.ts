import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import {Employee} from '../Model/Employee'

@Component({
    selector: 'app-eventBinding',
    templateUrl: './eventBinding.component.html' ,
})export class EventBindingComponent{
emp:Employee=new Employee();
title:string="Event Binding";

constructor(){
    this.emp.id=1;
    this.emp.name="Rahul";
    this.emp.email="abc@gmail.com"
}
showDetails:boolean=true;
onClick(){
    console.log("Clicking buttooooonnnnnnnn")
}

toggleDetails(){
    this.showDetails=!this.showDetails;
}
   
}