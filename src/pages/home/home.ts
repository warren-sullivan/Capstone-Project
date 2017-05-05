import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';

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

  ItemArray: Item[] = [];

  AmazonText: string = "placeholder";
  BestbuyText: string = "placeholder";
  EbayText: string = "placeholder";
  NeweggText: string = "placeholder";
  WalmartText: string = "placeholder";
  RadioshackText: string = "placeholder";

  constructor(
    private AmazonService: AmazonService,
    private BestbuyService: BestbuyService,
    private EbayService: EbayService,
    private NeweggService: NeweggService,
    private WalmartService: WalmartService,
    private RadioshackService: RadioshackService
    ){}

  Amazon(){
    let sub = this.AmazonService.service();
    sub.subscribe( res => { this.AmazonText = res; console.log(res) } );
  }

  Bestbuy(){this.BestbuyService.service().subscribe(res => res.products.forEach(item => this.ItemArray.push(this.BestbuyService.parse(item))));}

  Ebay(){
    let sub = this.EbayService.service();
    sub.subscribe( res => { this.EbayText = res.ItemArray.Item[2].Title; console.log(res) } );
  }

  Walmart(){
    let sub = this.WalmartService.service();
    sub.subscribe( res => { this.WalmartText = res.items[0].name; console.log(res) } );
  }

  Newegg(){
    this.NeweggText = this.NeweggService.service();
  }

  Radioshack(){
    this.RadioshackText = this.RadioshackService.service();
  }
}

export interface Item {
  Title: string,
  Price: number,
  ImagePresent: boolean,
  ImageURL: string,
}