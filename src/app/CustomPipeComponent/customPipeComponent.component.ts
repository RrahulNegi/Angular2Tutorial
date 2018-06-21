import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import {EmployeeDetails} from '../Model/EmployeeDetails';
import {Employee} from '../Model/Employee';

@Component({
    selector: 'app-custompipeBinding',
    templateUrl: './customPipeComponent.component.html' ,
    styleUrls: ['./style.scss']
})export class CustomPipeComponent{
      itemList:EmployeeDetails[]=[{id:"emp01",name:"abc",email:"abc@gmail.com", gender: "male",salary:5500,dob:'1/20/1988'},
      {id:"emp02",name:"xx",email:"xx@gmail.com", gender: "female",salary:5500,dob:'10/6/1984'},
      {id:"emp03",name:"ee",email:"ee@gmail.com", gender: "male",salary:8500,dob:'3/09/1989'},
      {id:"emp04",name:"gg",email:"gg@gmail.com", gender: "female",salary:6500,dob:'2/6/1983'}];

   
    constructor(){

        
       
        
     }
    title:string="Custom Pipe";
    colspanVal:number=3;
}