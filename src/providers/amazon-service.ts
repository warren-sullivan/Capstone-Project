import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Item } from '../pages/home/home';

@Injectable()
export class AmazonService {

  Amazonkey:string = "AKIAIYAGB637UJ55KX3A";

  constructor(private http: Http) { }

  service() {
    let s = 'http://webservices.amazon.com/onca/xml?Service=AWSECommerceService&AWSAccessKeyId=AKIAIYAGB637UJ55KX3A&Operation=ItemSearch&Keywords=the%20hunger%20games&SearchIndex=Books'
    return this.http.get(s).map( res => res.json() );
  }

    parse(Object):Item{
    let NewItem: Item = {
      Title: undefined,
      Price: undefined,
      ImagePresent: false,
      ImageURL: undefined,
    }
    return NewItem;
  }
}
