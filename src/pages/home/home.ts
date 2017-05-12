import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/forkjoin';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

import { ModalPage } from '../modal-page/modal-page';
import { OptionsPage } from '../options-page/options-page';

import { AmazonService } from '../../providers/amazon-service';
import { BestbuyService } from '../../providers/bestbuy-service';
import { EbayService } from '../../providers/ebay-service';
import { NeweggService } from '../../providers/newegg-service';
import { WalmartService } from '../../providers/walmart-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AmazonService, BestbuyService, EbayService, NeweggService, WalmartService]
})
export class HomePage {

  ItemDisplayList: Item[] = [];
  ItemArray: Item[] = [];
  SearchValue: string;

  enabledShops: EnabledShops;

  constructor(
    private modalCtrl: ModalController,
    private AmazonService: AmazonService,
    private BestbuyService: BestbuyService,
    private EbayService: EbayService,
    private NeweggService: NeweggService,
    private WalmartService: WalmartService
  ) {
    this.enabledShops = {
      EnableAmazon: false,
      EnableBestBuy: true,
      EnableEbay: true,
      EnableNewegg: false,
      EnableWalmart: true
    }
  }

  getItems() {
    Observable.forkJoin(
      this.BestbuyService.search(this.SearchValue).catch(res => Observable.of(undefined)),
      this.WalmartService.search(this.SearchValue).catch(res => Observable.of(undefined)),
      this.EbayService.search(this.SearchValue).catch(res => Observable.of(undefined)),
      //this.AmazonService.service().catch(res => Observable.of(undefined))
      //this.NeweggService.service().catch(res => Observable.of(undefined))
    ).subscribe(
      data => {
        this.ItemArray = [];
        if (data[3] && this.enabledShops.EnableAmazon) { data[3] }
        if (data[0] && this.enabledShops.EnableBestBuy) { data[0].products.forEach(item => this.ItemArray.push(this.BestbuyService.parse(item))) };
        if (data[2] && this.enabledShops.EnableEbay && data[2].findItemsByKeywordsResponse[0].searchResult[0].item) { data[2].findItemsByKeywordsResponse[0].searchResult[0].item.forEach(item => this.ItemArray.push(this.EbayService.parse(item))) };
        if (data[4] && this.enabledShops.EnableNewegg) { data[4] }
        if (data[1] && this.enabledShops.EnableWalmart && data[1].items) { data[1].items.forEach(item => this.ItemArray.push(this.WalmartService.parse(item))) };
        this.ItemDisplayList = this.ItemArray.sort((a, b) => { return a.Price - b.Price });
      }
      );
  }

  options(shops: EnabledShops) {
    let modal = this.modalCtrl.create(OptionsPage, { shops });
    modal.present();
    modal.onDidDismiss(data => this.enabledShops = data);
  }

  logout() { }

  presentModal(item: Item) {
    let modal = this.modalCtrl.create(ModalPage, { item });
    modal.present();
  }
}

export interface Item {
  Title: string,
  Price: number,
  Description: string,
  ShopURL: string,
  Thumbnail: boolean,
  ThumbURL: string,
  FullImage: boolean,
  FullURL: string
}

export interface EnabledShops {
  EnableAmazon: boolean;
  EnableBestBuy: boolean;
  EnableEbay: boolean;
  EnableNewegg: boolean;
  EnableWalmart: boolean;
}