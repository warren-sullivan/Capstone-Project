import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { Item } from '../home/home';

@Component({
  selector: 'page-modal-page',
  templateUrl: 'modal-page.html',
})
export class ModalPage {

  title:string= "";
  price:number = 0;
  desc:string = "";
  shop:string = "";
  imageURL:string = "";

  constructor(private viewCtrl: ViewController, private navParams: NavParams) {
    let item: Item = navParams.get("item");
    this.title = item.Title;
    this.price = item.Price;
    this.desc = item.Description;
    this.shop = item.ShopURL;
    if(item.FullImage){this.imageURL = item.FullURL}
  }

  close(){
    this.viewCtrl.dismiss();
  }
}
