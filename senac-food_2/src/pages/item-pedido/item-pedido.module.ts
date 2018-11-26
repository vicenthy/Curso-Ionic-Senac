import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemPedidoPage } from './item-pedido';

@NgModule({
  declarations: [
    ItemPedidoPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemPedidoPage),
  ],
})
export class ItemPedidoPageModule {}
