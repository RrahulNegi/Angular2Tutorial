import { Component, OnInit, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import {EmployeeDetails} from '../Model/EmployeeDetails';
import {Employee} from '../Model/Employee';

@Component({
    selector: 'app-inputoutputChildBinding',
    templateUrl: './inputOutputChildComponent.component.html' ,
    styleUrls: ['./inputOutputChildComponent.scss']
})export class InputOutputChildComponent{
    // to keap track of selected radio value
    selectedRadioButtonValue: string ='All';
    @Output() //custom event 
    // event payload is of type string
    countRadioButtonSelectionChanged: EventEmitter<string> =new EventEmitter<string>();

    @Input()
     all: number;
     @Input()
     male: number;
     @Input()
     female: number;

    onRadioButtonSelectionChange(){
        //emit method to raise the event
        this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
        console.log("Helllloo"+this.selectedRadioButtonValue)
    } 
}