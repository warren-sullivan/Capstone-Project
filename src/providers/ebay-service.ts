import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Item } from '../pages/home/home';

@Injectable()
export class EbayService {

  EbayKey:string = "WarrenSu-PriceCom-PRD-269dbd521-5c00d944";

  constructor(private http: Http) {}

  search(input: string){
    let s = 'http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME='+this.EbayKey+'&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&paginationInput.entriesPerPage=10&keywords='+input+'&outputSelector=PictureURLSuperSize';
    return this.http.get(s).map( res => res.json() );
  }

  parse(Object):Item{
    let thumb: boolean = false;
    if(Object.galleryURL){thumb=true};
    let full: boolean = false;
    let fullUrl: string = "";
    if(Object.pictureURLSuperSize){
      full=true;
      fullUrl = Object.pictureURLSuperSize[0]};

    let NewItem: Item = {
      Title: Object.title[0],
      Price: Object.sellingStatus[0].currentPrice[0].__value__,
      Description: undefined,
      ShopURL: Object.viewItemURL[0],
      Thumbnail: thumb,
      ThumbURL: Object.galleryURL[0],
      FullImage: full,
      FullURL: fullUrl
    }
    return NewItem;
  }
}
