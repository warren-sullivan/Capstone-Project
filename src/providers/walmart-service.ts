import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import Walmart from 'walmart';
import 'rxjs/add/operator/map';

//This provider is using https://github.com/walmartlabs/walmart-api

@Injectable()
export class WalmartService {

  key: string = 'vragsyd4cr9escfn6pks3quf';
  product: string = '035000521019';

  constructor(public http: Http) {
    
  }

  test() {
    //angular2 enable CORS
    let s: string = 'http://api.walmartlabs.com/v1/items?apiKey=' + this.key + '&upc=' + this.product;
    return this.http.get(s).map( res => res.json() );
  }
}
