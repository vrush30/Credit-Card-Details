import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebitcardsComponent } from './debitcards.component';

const routes: Routes = [
  { path: '', component: DebitcardsComponent },
  { path: '', component: DebitcardsComponent },
  { path: '', component: DebitcardsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DebitcardsRoutingModule { }
