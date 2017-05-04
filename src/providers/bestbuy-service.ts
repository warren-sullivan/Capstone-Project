import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BestbuyService {

  BestbuyKey:string = 'wKWGtO3S74GrGnwZcyuybMuy';

  constructor(public http: Http) {
    
  }

  test() {
    let s = 'https://api.bestbuy.com/v1/products(categoryPath.name=All Flat-Panel TVs)?show=sku,name,salePrice&sort=salesRankMediumTerm&format=json&apiKey=';
    return this.http.get(s + this.BestbuyKey).map( res => res.json() );
  }
}
