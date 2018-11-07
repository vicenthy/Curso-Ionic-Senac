import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeuPrimeiroComponenteComponent } from './meu-primeiro-componente/meu-primeiro-componente.component';

const routes: Routes = [
  { path: '', component: MeuPrimeiroComponenteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
