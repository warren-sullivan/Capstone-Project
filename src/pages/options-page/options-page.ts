import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { EnabledShops } from '../home/home';

@Component({
  selector: 'page-options-page',
  templateUrl: 'options-page.html',
})
export class OptionsPage {

  Amazon: boolean;
  BestBuy: boolean;
  Ebay: boolean;
  Newegg: boolean;
  Walmart: boolean;

  constructor(private viewCtrl: ViewController, private navParams: NavParams) {
    let shops: EnabledShops = navParams.get("shops");
    this.Amazon = shops.EnableAmazon;
    this.BestBuy = shops.EnableBestBuy;
    this.Ebay = shops.EnableEbay;
    this.Newegg = shops.EnableNewegg;
    this.Walmart = shops.EnableWalmart;
  }

  close(){
    let shops: EnabledShops = {
      EnableAmazon: this.Amazon,
      EnableBestBuy: this.BestBuy,
      EnableEbay: this.Ebay,
      EnableNewegg: this.Newegg,
      EnableWalmart: this.Walmart
    }
    this.viewCtrl.dismiss(shops);
  }
}
