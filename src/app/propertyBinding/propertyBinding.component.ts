import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';

@Component({
    selector: 'app-prppertyBinding',
    templateUrl: './propertyBinding.component.html'    
})export class PropertyBindingComponent{

    title:string="Property Binding";
     
    interpolationTitle:string="Property Binding using interpolation";//
    normalTitle:string="Property Binding without using interpolation"; // only when we are dealing with non string value
    isDisable:boolean=false;
    value:string="Hello.."
    headerValue:string="Header value";
    CanonicalTitle:string="Canonical Variation";
    badHtmlTitle:string="Handel Bad Html"
    badHtml:string="Hello <style>alert('Hacked')</style> World";
    curlBaase:string=" using :: {{}}"
     
    
}