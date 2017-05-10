import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Item } from '../pages/home/home';

@Injectable()
export class BestbuyService {

  BestbuyKey:string = 'wKWGtO3S74GrGnwZcyuybMuy';

  constructor(private http: Http) { }

  search(input: string) {
    let s = 'https://api.bestbuy.com/v1/products(search=' + input + ')?format=json&show=sku,name,salePrice,thumbnailImage,largeImage,description,url&apiKey=' + this.BestbuyKey;
    return this.http.get(s).map( res => res.json() );
  }

  parse(Object):Item{
    let thumb: boolean = false;
    if(Object.thumbnailImage){thumb=true};
    let full: boolean = false;
    if(Object.largeImage){full=true};

    let NewItem: Item = {
      Title: Object.name,
      Price: Object.salePrice,
      Description: Object.description,
      ShopURL: Object.url,
      Thumbnail: thumb,
      ThumbURL: Object.thumbnailImage,
      FullImage: full,
      FullURL: Object.largeImage
    }
    return NewItem;
  }
}
