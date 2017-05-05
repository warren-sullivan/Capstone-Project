import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EbayService {

  constructor(private http: Http) { }

  service(){
    let s = "http://open.api.sandbox.ebay.com/shopping?callname=FindPopularItems&responseencoding=JSON&appid=WarrenSu-PriceCom-SBX-30916cf10-b96042f6&siteid=0&QueryKeywords=dog&version=713";
    return this.http.get(s).map( res => res.json() );
  }
}
