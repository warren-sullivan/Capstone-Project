import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AmazonService {

  Amazonkey:string = "";

  constructor(public http: Http) {

  }

  test() {
    let s = 'http://webservices.amazon.com/onca/xml?Service=AWSECommerceService&AWSAccessKeyId=AKIAIYAGB637UJ55KX3A&Operation=ItemSearch&Keywords=the%20hunger%20games&SearchIndex=Books'
    return this.http.get(s + this.Amazonkey).map( res => res.json() );
  }
}
