import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditcardsComponent } from './creditcards.component';
import { ViewCreditCardComponent } from './view-credit-card/view-credit-card.component';
import { EditCreditCardComponent } from './edit-credit-card/edit-credit-card.component';
import { DeleteCreditCardComponent } from './delete-credit-card/delete-credit-card.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AddCreditCardComponent } from './add-credit-card/add-credit-card.component';

const routes: Routes = [
  { path: '', component: CreditcardsComponent },
  { path: 'add', component: AddCreditCardComponent },
  { path: 'view/:id', component: ViewCreditCardComponent },
  { path: 'edit/:id', component: EditCreditCardComponent },
  { path: 'delete/:id', component: DeleteCreditCardComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditcardsRoutingModule { }
