import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestauranteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export const API_URL = 'http://localhost:3000';

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

}
