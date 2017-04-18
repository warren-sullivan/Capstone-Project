import { Injectable } from '@angular/core';
import apac from 'apac';

//This provider is using https://github.com/dmcquay/node-apac

@Injectable()
export class AmazonService {

  opHelper:any;

  constructor() {
    
  }

  test() {
    this.opHelper.execute('ItemSearch', {
      'SearchIndex': 'Books',
      'Keywords': 'harry potter',
      'ResponseGroup': 'ItemAttributes,Offers'
    }).then((response) => {
        console.log("Results object: ", response.result);
        console.log("Raw response body: ", response.responseBody);
    }).catch((err) => {
        console.error("Something went wrong! ", err);
    });
  }
}
