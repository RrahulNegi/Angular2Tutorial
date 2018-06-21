import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import {EmployeeDetails} from '../Model/EmployeeDetails';
import {Employee} from '../Model/Employee';

@Component({
    selector: 'app-inputoutputBinding',
    templateUrl: './InputOutputComponent.component.html' ,
    styleUrls: ['./style.scss']
})export class InputOutputComponent{
     
   itemList: any[];
   // it track which radio button is selected. By default it will selected all the employeess
   selectedEmployeeCountRadioButton: string='All';
    constructor(){
        this.itemList=[{id:"emp01",name:"abc",email:"abc@gmail.com", gender: "Male",salary:5500,dob:'1/20/1988'},
        {id:"emp02",name:"xx",email:"xx@gmail.com", gender: "Female",salary:5500,dob:'10/6/1984'},
        {id:"emp03",name:"ee",email:"ee@gmail.com", gender: "Male",salary:8500,dob:'3/09/1989'},
        {id:"emp04",name:"gg",email:"gg@gmail.com", gender: "female",salary:6500,dob:'2/6/1983'}];
  
     }
     //Method which is called when custom event within our child component is raised
     //Baiscally this method recive that custom data value raised by selecting radio button
     onEmployeeCountRadioButtonChange(selectedRadioButtonValue:string):void{
         this.selectedEmployeeCountRadioButton=selectedRadioButtonValue;
     }
    title:string="Input & Output Component";
    colspanVal:number=3;


   getTotalEmployeeCount():number{
       return this.itemList.length;
   } 

   getTotalMaleEmployeeCount():number{
    return this.itemList.filter(e => e.gender ==="male").length;
} 
getTotalFemaleEmployeeCount():number{
    return this.itemList.filter(e => e.gender ==="female").length;
} 
}