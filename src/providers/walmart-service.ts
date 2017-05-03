import { Injectable } from '@angular/core';
//import Walmart from 'walmart';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

//This provider is using https://github.com/walmartlabs/walmart-api

@Injectable()
export class WalmartService {

  constructor(private http: Http) {
    
  }

  test() {
    //this works
    //return this.http.get('https://api.github.com/users/robinsonaaron').map( res => res.json() );


    //Walmart.getItem(10449075).then(function(item) {
      //console.log(item.product.productAttributes.productName);
    //});
    //return "Walmart";
  }
}
