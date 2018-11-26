import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RestaurantePage } from '../pages/restaurante/restaurante';
import { PedidoPage } from '../pages/pedido/pedido';
import { ItemPedidoPage } from '../pages/item-pedido/item-pedido';
import { RestauranteProvider } from '../providers/restaurante/restaurante';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RestaurantePage,
    PedidoPage,
    ItemPedidoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RestaurantePage,
    PedidoPage,
    ItemPedidoPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestauranteProvider
  ]
})
export class AppModule {}
