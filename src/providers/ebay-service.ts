import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Item } from '../pages/home/home';

@Injectable()
export class EbayService {

  EbayKey:string = "WarrenSu-PriceCom-SBX-30916cf10-b96042f";

  constructor(private http: Http) { }

  search(input: string){
    let s = "http://open.api.sandbox.ebay.com/shopping?callname=FindPopularItems&responseencoding=JSON&appid=WarrenSu-PriceCom-SBX-30916cf10-b96042f6&siteid=0&QueryKeywords=dog&version=713";
    return this.http.get(s).map( res => res.json() );
  }

  parse(Object):Item{
    let NewItem: Item = {
      Title: Object.Title,
      Price: Object.ConvertedCurrentPrice.Value,
      ImagePresent: false,
      ImageURL: undefined
    }
    return NewItem;
  }
}
