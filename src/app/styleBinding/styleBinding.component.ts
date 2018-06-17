import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import {Employee} from '../Model/Employee'

@Component({
    selector: 'app-styleBinding',
    templateUrl: './styleBinding.component.html' ,
    styleUrls: ['./styleBinding.scss']
})export class StyleBindingComponent{
  
title:string="Style Binding";
isBold:boolean=true
fontSize:number=30;
isItalic :boolean=true;

addStyle(){
    let styles={
        'font-size.px': this.fontSize,
        'font-style': this.isItalic ? 'italic' :'normal',
        'font-weight': this.isBold ? 'bold' :'normal'
        
    }
    return styles;
}
    
   
}