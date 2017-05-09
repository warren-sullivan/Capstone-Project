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
  imageURL:string = "";

  constructor(private viewCtrl: ViewController, private navParams: NavParams) {
    let item: Item = navParams.get("item");
    this.title = item.Title;
    this.price = item.Price;
    if(item.ImagePresent){this.imageURL = item.ImageURL}
  }

  close(){
    this.viewCtrl.dismiss();
  }
}
