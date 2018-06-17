import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import {Employee} from '../Model/Employee'

@Component({
    selector: 'app-classBinding',
    templateUrl: './classBinding.component.html' ,
    styleUrls: ['./classBinding.scss']
})export class ClassBindingComponent{

  
    title:string="Class Binding";
    classToApply:string ='boldClass italicClass';
    //Conditional class
    isApplayBoldClass:boolean=false;
    applayItalicClass:boolean= true;
    
    addClasses(){
        let classes={
            boldClass: this.isApplayBoldClass,
            italicClass: this.applayItalicClass
        };
        return classes;
    } 
}