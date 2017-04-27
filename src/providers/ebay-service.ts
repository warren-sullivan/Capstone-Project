import { Injectable } from '@angular/core';
import Ebay from 'ebay-api';

//This provider is using https://github.com/benbuckman/nodejs-ebay-api
//node api is no longer maintained, may not work

@Injectable()
export class EbayService {

  constructor() {
    
  }

  test(){
    let s1:string;
    let s2:string;
    Ebay.xmlRequest({
      'serviceName': 'Shopping',
      'opType': 'GetSingleItem',
      'appId': 'WarrenSu-PriceCom-SBX-30916cf10-b96042f6',
      params: {
        'ItemID': '302290415651'
      }
    },
    function(error, data){
      s1 = error;
      s2 = data;
    })
    return s1 + "\n" + s2;
  }

}
