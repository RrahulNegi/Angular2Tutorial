import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import {SearchProductServiceService} from "../search-product-service.service";
import {Product, Category} from './product.model';
import {SearchService} from '../search-services/search-service'
@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css'],
  providers: [SearchService]
  
})
export class SearchProductComponent implements OnInit {
  isConnected = false;
  
   status: string;
   private productList:Product[]=[];
   private size:number=0;
   private colorSet=new Set();
   private sizeSet= new Set();
 
  constructor( private searchService: SearchService) { }

  ngOnInit() {
    
  }
searchText:string;
 search():void{
console.log("Hellooooooooooo")
console.log("SearchText=====>>"+this.searchProduct(this.searchText));
this.productList.forEach(element => {
  console.log("hiiiii"+element.color)
  this.colorSet.add(element.color)
  this.sizeSet.add(element.size)
  
});
}

public check(e):void{
  console.log("checkkkkk==>"+e.target.checked)
}

public searchProduct(serachText:string):Product[]{
  this.searchService.searchProduct(serachText).subscribe((data:Product[]) =>{
    console.log("getAllItemType",data);
    this.productList=data;
    this.size=this.productList.length;
    this.productList.forEach(element => {
      console.log("hiiiii"+element.color)
      this.colorSet.add(element.color)
      this.sizeSet.add(element.size)
      
    });
      },
      err=>{
      });
console.log("HIIIIIII")


    return this.productList;

}

public addProduct():Product{
  let product =new Product();
  product.id="1";
  product.name="IPhone";
  let catArray=new Array<Category>();
  
  let category=new Category();
  category.type="Mobile";
  catArray.push(category)
  let category1=new Category();
  category.type="Mobile1111";
  catArray.push(category1)
  let category2=new Category();
  category.type="Mobile222";
  catArray.push(category2);
  console.log("Array",catArray)
  product.category=catArray;
  return product;
}
}
