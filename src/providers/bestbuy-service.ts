import { Injectable } from '@angular/core';
import Bestbuy from 'bestbuy';

//This provider is using https://github.com/BestBuyAPIs/bestbuy-sdk-js

@Injectable()
export class BestbuyService {

  BestbuyKey:string = 'wKWGtO3S74GrGnwZcyuybMuy';

  constructor() {
    
  }

  test() {
    /* bluebird.config is not a function
    Bestbuy.products('(search=mario)', {show: 'salePrice,name', pageSize: 1})
      .then(function(data){
        if (data.total === 0) console.log('No products found');
        else console.log('Found %d products. First match "%s" is $%d', data.total, data.products[0].name, data.products[0].salePrice);
      })
    */
  }
}
