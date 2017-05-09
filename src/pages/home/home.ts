import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs/rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/forkjoin';
import 'rxjs/add/observable/throw';

import { ModalPage } from '../modal-page/modal-page';

import { AmazonService } from '../../providers/amazon-service';
import { BestbuyService } from '../../providers/bestbuy-service';
import { EbayService } from '../../providers/ebay-service';
import { NeweggService } from '../../providers/newegg-service';
import { WalmartService } from '../../providers/walmart-service';
import { RadioshackService } from '../../providers/radioshack-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AmazonService, BestbuyService, EbayService, NeweggService, WalmartService, RadioshackService]
})
export class HomePage {

  //to be deleted
  AmazonText: string = "placeholder";
  BestbuyText: string = "placeholder";
  EbayText: string = "placeholder";
  NeweggText: string = "placeholder";
  WalmartText: string = "placeholder";
  RadioshackText: string = "placeholder";

  ItemDisplayList: Item[] = [];
  ItemArray: Item[] = [];
  SearchValue: string;

  EnableAmazon: boolean;
  EnableBestBuy: boolean;
  EnableEbay: boolean;
  EnableNewegg: boolean;
  EnableWalmart: boolean;
  EnableRadioshack: boolean;

  constructor(
    private modalCtrl: ModalController,
    private AmazonService: AmazonService,
    private BestbuyService: BestbuyService,
    private EbayService: EbayService,
    private NeweggService: NeweggService,
    private WalmartService: WalmartService,
    private RadioshackService: RadioshackService
    ){
      this.EnableAmazon = false;
      this.EnableBestBuy = true;
      this.EnableEbay = true;
      this.EnableNewegg = false;
      this.EnableWalmart = true;
      this.EnableRadioshack = false;
    }

/*
  TODO

  Add support for product images - in progress!
  Enable/disable stores via options
  (optional) Change colors via options
  Logout popup
  APIs
  Modal for product detail+larger image on click

*/

  getItems(){
    this.ItemArray = [];
    Observable.forkJoin(
      this.BestbuyService.search(this.SearchValue).catch(res => Observable.of(undefined)),
      this.WalmartService.search(this.SearchValue).catch(res => Observable.of(undefined)),
      this.EbayService.search(this.SearchValue).catch(res => Observable.of(undefined)),
      //this.AmazonService.service().catch(res => Observable.of(undefined))
      //this.NeweggService.service().catch(res => Observable.of(undefined)),
      //this.RadioshackService.service().catch(res => Observable.of(undefined))
    ).subscribe(
      data => {
        if(data[0]&&this.EnableBestBuy){data[0].products.forEach(item => this.ItemArray.push(this.BestbuyService.parse(item)))};
        if(data[1]&&this.EnableWalmart&&data[1].items){data[1].items.forEach(item => this.ItemArray.push(this.WalmartService.parse(item)))};
        if(data[2]&&this.EnableEbay){data[2].findItemsByKeywordsResponse[0].searchResult[0].item.forEach(item => this.ItemArray.push(this.EbayService.parse(item)))};
        if(data[3]&&this.EnableAmazon){data[3]}
        if(data[4]&&this.EnableNewegg){data[4]}
        if(data[5]&&this.EnableRadioshack){data[5]}
        this.ItemDisplayList = this.ItemArray.sort((a, b) => {return a.Price - b.Price});
      }
    );
  }

  options(){}

  logout(){}

  presentModal(item: Item) {
    let modal = this.modalCtrl.create(ModalPage, {item});
    modal.present();
  }

  //fix query
  Amazon(){this.AmazonService.service().subscribe( res => { this.AmazonText = res; console.log(res) } );}

  //to be deleted
  Bestbuy(){this.BestbuyService.search(this.SearchValue).subscribe(res => res.products.forEach(item => this.ItemArray.push(this.BestbuyService.parse(item))))}

  //to be deleted
  Ebay(){this.EbayService.search(this.SearchValue).subscribe(res => res.ItemArray.Item.forEach(item => this.ItemArray.push(this.EbayService.parse(item))))}

  //to be deleted
  Walmart(){this.WalmartService.search(this.SearchValue).subscribe(res => res.items.forEach(item => this.ItemArray.push(this.WalmartService.parse(item))))}

  //todo
  Newegg(){this.NeweggText = this.NeweggService.service();}

  //todo
  Radioshack(){this.RadioshackText = this.RadioshackService.service();}
}

export interface Item {
  Title: string,
  Price: number,
  ImagePresent: boolean,
  ImageURL: string,
}