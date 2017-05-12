import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Item } from '../pages/home/home';

@Injectable()
export class WalmartService {

  WalmartKey: string = 'vragsyd4cr9escfn6pks3quf';

  constructor(private http: Http) { }

  search(input: string) {
    let s: string = 'http://api.walmartlabs.com/v1/search?apiKey=' + this.WalmartKey + '&query=' + input;
    return this.http.get(s).map(res => res.json());
  }

  parse(Object): Item {
    let regex: RegExp = /&quot;|\/*([lub][rli4p])*&[gl][t];|\/*[pb1u]*&[gl][t];/g;

    let thumb: boolean = false;
    if (Object.thumbnailImage) { thumb = true };
    let full: boolean = false;
    if (Object.largeImage) { full = true };

    let NewItem: Item = {
      Title: Object.name,
      Price: Object.salePrice,
      Description: Object.longDescription.replace(regex, " "),
      ShopURL: Object.productUrl,
      Thumbnail: thumb,
      ThumbURL: Object.thumbnailImage,
      FullImage: full,
      FullURL: Object.largeImage
    }
    return NewItem;
  }
}
