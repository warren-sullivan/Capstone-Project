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

  AmazonText : string = "placeholder";
  BestbuyText : string = "placeholder";
  EbayText : string = "placeholder";
  NeweggText : string = "placeholder";
  WalmartText : string = "placeholder";
  RadioshackText : string = "placeholder";

  constructor(private AmazonService: AmazonService,
              private BestbuyService: BestbuyService,
              private EbayService: EbayService,
              private NeweggService: NeweggService,
              private WalmartService: WalmartService,
              private RadioshackService: RadioshackService) {}

  Amazon(){
    this.AmazonText = this.AmazonService.test();
  }

  Bestbuy(){
    this.BestbuyText = this.BestbuyService.test();
  }

  Ebay(){
    this.EbayText = this.EbayService.test();
  }

  Walmart(){
    //let sub = this.WalmartService.test();
    //sub.subscribe( res => { this.WalmartText = res.login; console.log(res.login) } );
  }

  Newegg(){
    this.NeweggText = this.NeweggService.test();
  }

  Radioshack(){
    this.RadioshackText = this.RadioshackService.test();
  }
}
