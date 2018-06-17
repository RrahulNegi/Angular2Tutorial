import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import {Employee} from '../Model/Employee';

@Component({
    selector: 'app-childComponent',
    templateUrl: './childComponent.component.html',
    styleUrls: ['./style.scss']
    
  })
export class ChildComponent {
  emp:Employee=new Employee();
  
  constructor(){
    this.emp.id=1;
    this.emp.name="Rahul";
    this.emp.email="abc@gmail.com"
    

  }

title:string="Child Component"    
}