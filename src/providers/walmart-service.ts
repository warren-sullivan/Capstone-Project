import { Injectable } from '@angular/core';
import walmart from 'walmart';

//This provider is using https://github.com/walmartlabs/walmart-api

@Injectable()
export class WalmartService {

  constructor() {
    
  }

  test() {
    walmart.getItem(10449075).then(function(item) {
      console.log(item.product.productAttributes.productName);
    });
  }
}
