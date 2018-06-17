import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';

@Component({
  selector: 'app-dataBinding',
  templateUrl: './dataBinding.component.html',
  
})
export class DataBindingComponent  {

title:string="Welcome to Data Binding" ;

list:any[]=[{"id":1,"name":"Rahul"},
{"id":2,"name":"Rahul Singh"},
{"id":3,"name":"Rahul Singh Negi"}
]
twoWayBinding:string="Two way DataBinding";
twoWayUsingPropertyAndEvent="Using property and event binding"
twoWayUsingNgModel="property + event binding = ngModel"

name:string="";
}
  