import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'creditcards', loadChildren: () => import('./creditcards/creditcards.module').then(m => m.CreditcardsModule) }, 
  { path: 'debitcards', loadChildren: () => import('./debitcards/debitcards.module').then(m => m.DebitcardsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
