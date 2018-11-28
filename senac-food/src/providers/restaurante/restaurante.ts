import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestauranteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export const API_URL = 'http://192.168.43.190:3000';

@Injectable()
export class RestauranteProvider {

  constructor(public http: HttpClient) {
  }

  public getAll(){
    return new Promise( (resolver, reject) => {
      this.http.get(API_URL + '/restaurante')
            .subscribe( (result:any) => {
              resolver(result);
            }, error => {
              reject(error);
            } )
    })
  }

  public getReviewByRestaurante(restaurante:string){
    return new Promise( (resolver, reject) => {
    this.http.get(API_URL + `/reviews?restaurantId=${restaurante}`)
    .subscribe( (result:any) => {
      resolver(result);
    }, error => {
      reject(error);
    } )
})
  }
  public getProdutoByRestaurante(restaurante:string){
    return new Promise( (resolver, reject) => {
      this.http.get(API_URL + `/produto?restaurantId=${restaurante}`)
      .subscribe( (result:any) => {
        resolver(result);
      }, error => {
        reject(error);
      } )
  }


}
