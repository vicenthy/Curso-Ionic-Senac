import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestauranteProvider } from '../../providers/restaurante/restaurante';

/**
 * Generated class for the RestaurantePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurante',
  templateUrl: 'restaurante.html',
})
export class RestaurantePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public restauranteProvider:RestauranteProvider) {
                console.log(this.navParams.get("restaurante"))

      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantePage');
  }

}
