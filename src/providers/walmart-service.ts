import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Item } from '../pages/home/home';

@Injectable()
export class WalmartService {

  WalmartKey: string = 'vragsyd4cr9escfn6pks3quf';

  constructor(private http: Http) { }

  search(input: string) {
    let item: string = 'ipod';
    let s: string = 'http://api.walmartlabs.com/v1/search?apiKey=' + this.WalmartKey +'&query=' + item;
    return this.http.get(s).map( res => res.json() );
  }

  parse(Object):Item{
    let NewItem: Item = {
      Title: Object.name,
      Price: Object.salePrice,
      ImagePresent: false,
      ImageURL: undefined
    }
    return NewItem;
  }
}
