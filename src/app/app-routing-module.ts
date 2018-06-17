import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{SearchProductComponent} from "./search-product/search-product.component"
import{MainPageComponent} from "./mainPage/mainPage.component"
import{DataBindingComponent} from "./dataBinding/dataBinding.component"
import{ParentComponent} from "./NestedComponent/parentComponent.component"
import {InterpolationComponent} from "./interpolation/interpolation.component"
import {PropertyBindingComponent} from "./PropertyBinding/propertyBinding.component"
import {AttributeBindingComponent} from "./AttributeBinding/attributeBinding.component"
import {ClassBindingComponent} from "./ClassBinding/classBinding.component"
import {StyleBindingComponent} from "./StyleBinding/styleBinding.component"
import {EventBindingComponent} from "./EventBinding/eventBinding.component"
import {PipeComponent} from "./PipeComponent/pipeComponent.component"












const routes: Routes = [
  { path: '', redirectTo: '/angular2Tutorial', pathMatch: 'full' },
   { path: 'angular2Tutorial', component: MainPageComponent },
   { path: 'dataBinding',  component: DataBindingComponent } ,
   { path: 'nestedComponent',  component: ParentComponent } ,
   { path: 'interpolation',  component: InterpolationComponent } ,
   { path: 'propertyBinding', component: PropertyBindingComponent},
   { path: 'attributeBinding',  component: AttributeBindingComponent } ,
   { path: 'classBinding',  component: ClassBindingComponent } ,
   { path: 'styleBinding',  component: StyleBindingComponent } ,
   { path: 'eventBinding',  component: EventBindingComponent } ,
   { path: 'pipe',  component: PipeComponent } ,
//   { path: 'purchaseOfDay',  component: PurchaseOfDayComponent } 
  
  
  
  
 // ,{ path: 'datatable',  component: DatatableComponent } 
  
 
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}