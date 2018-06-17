import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';

@Component({
    selector: 'app-interpolationComponent',
    templateUrl: './interpolation.component.html'    
  })export class InterpolationComponent{

    getName():string{
        return "Rahul";
    }    
}