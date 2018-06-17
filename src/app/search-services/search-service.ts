import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Product}from '../search-product/product.model';


@Injectable()
export class SearchService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  
   appUrl:string = 'http://localhost:8080/searchEngine';  // URL to web api
   APISearchOnName='getProductOnProductName'
   constructor(private http: Http) { }
   

  searchProduct(name:string): Observable<Product[]> {
    let apiUrl: string = this.appUrl + "/" + this.APISearchOnName+"/"+name;
    console.log("In Service=====>>>"+apiUrl)
    return this.http.get(apiUrl, { headers: this.headers }
    ).map((res: Response) => res.json() as Product[]);
}   
}
