import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import {Employee} from '../Model/Employee'

@Component({
    selector: 'app-attributeBinding',
    templateUrl: './attributeBinding.component.html' ,
    styleUrls: ['./style.scss']
})export class AttributeBindingComponent{

    emp:Employee=new Employee();
    
    constructor(){
      this.emp.id=1;
      this.emp.name="Rahul";
      this.emp.email="abc@gmail.com"
     
    }
    title:string="Attribute Binding";
    colspanVal:number=3;
}