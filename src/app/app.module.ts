import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing-module';

import { SearchProductComponent } from './search-product/search-product.component';
import { MainPageComponent } from './mainPage/mainPage.component';
import { DataBindingComponent } from './dataBinding/dataBinding.component';


import {SearchProductServiceService}from './search-product-service.service'
import {ParentComponent} from './NestedComponent/parentComponent.component'
import {ChildComponent} from './childComponent/childComponent.component'
import {InterpolationComponent} from "./interpolation/interpolation.component"
import {PropertyBindingComponent} from "./PropertyBinding/propertyBinding.component"
import {AttributeBindingComponent} from "./AttributeBinding/attributeBinding.component"
import {ClassBindingComponent} from "./ClassBinding/classBinding.component"
import {StyleBindingComponent} from "./StyleBinding/styleBinding.component"
import {EventBindingComponent} from "./EventBinding/eventBinding.component"
import {PipeComponent} from "./PipeComponent/pipeComponent.component"








import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    SearchProductComponent,
    MainPageComponent,
    DataBindingComponent,
    ParentComponent,
    ChildComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    AttributeBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    PipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [SearchProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
