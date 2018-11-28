import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestauranteProvider } from '../../providers/restaurante/restaurante';
import { RestaurantePage } from '../restaurante/restaurante';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  restaurantes = [];
  constructor(public navCtrl: NavController,
              public restauranteProvider: RestauranteProvider) {
  this.restauranteProvider.getAll()
  .then( (result:any) => {
    this.restaurantes = result;
  } ).catch( err => console.error(err));

  }

  openRestaurante(restaurante){
    this.navCtrl.push(RestaurantePage, { restaurante:restaurante });

  }


}
