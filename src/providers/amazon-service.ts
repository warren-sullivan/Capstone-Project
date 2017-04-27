import { Injectable } from '@angular/core';
import Amazon from 'apac';

//This provider is using https://github.com/dmcquay/node-apac

@Injectable()
export class AmazonService {

  /*
  opHelper:any = new Amazon({
      awsId:     '[YOUR AWS ID HERE]',
      awsSecret: '[YOUR AWS SECRET HERE]',
      assocId:   '[YOUR ASSOCIATE TAG HERE]'
    });
  */

  constructor() {

  }

  test() {
    /*this.opHelper.execute('ItemSearch', {
      'SearchIndex': 'Books',
      'Keywords': 'harry potter',
      'ResponseGroup': 'ItemAttributes,Offers'
    }).then((response) => {
        console.log("Results object: ", response.result);
        console.log("Raw response body: ", response.responseBody);
    }).catch((err) => {
        console.error("Something went wrong! ", err);
    });
    */
  }
}
