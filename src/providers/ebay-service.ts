import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Item } from '../pages/home/home';

@Injectable()
export class EbayService {

  EbayKey:string = "appid=WarrenSu-PriceCom-PRD-269dbd521-5c00d944&";

  URL:string = "http://svcs.ebay.com/services/search/FindingService/v1?";
  Operation:string = "OPERATION-NAME=findItemsByKeywords";
  Version:string = "&SERVICE-VERSION=1.0.0";
  AppID:string = "&SECURITY-APPNAME="+this.EbayKey;
  Datatype:string = "&RESPONSE-DATA-FORMAT=JSON";
  Rest:string = "&REST-PAYLOAD";
  Keywords:string = "&keywords=";

  constructor(private http: Http) {}

  search(input: string){
    //let s = this.URL+this.Operation+this.Version+this.AppID+this.Datatype+this.Rest+this.Keywords+input;
    let s = 'http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=WarrenSu-PriceCom-PRD-269dbd521-5c00d944&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&paginationInput.entriesPerPage=10&keywords='+input;
    return this.http.get(s).map( res => res.json() );
  }

  parse(Object):Item{
    let img:boolean = false;
    if(Object.galleryURL[0]){img=true}

    let NewItem: Item = {
      Title: Object.title[0],
      Price: Object.sellingStatus[0].currentPrice[0].__value__,
      ImagePresent: img,
      ImageURL: Object.galleryURL[0]
    }
    return NewItem;
  }
}
