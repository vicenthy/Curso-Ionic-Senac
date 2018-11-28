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

  restaurante:any;
  produtos = [];
  reviews = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public restauranteProvider:RestauranteProvider) {
           this.restaurante =  this.navParams.get("restaurante");

           this.restauranteProvider
           .getProdutosByRestaurante(this.restaurante.id)
           .then( (produtos:any) => this.produtos = produtos);

           this.restauranteProvider
           .getReviewByRestaurante(this.restaurante.id)
           .then( (reviews:any) => this.reviews = reviews )


      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantePage');
  }

}
