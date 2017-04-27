import { Injectable } from '@angular/core';
import Walmart from 'walmart';

//This provider is using https://github.com/walmartlabs/walmart-api

@Injectable()
export class WalmartService {

  constructor() {
    
  }

  test() {
    //*
    Walmart.getItem(10449075).then(function(item) {
      //console.log(item.product.productAttributes.productName);
    });
    //*/
  }
}
