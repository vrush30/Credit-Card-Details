import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditcardsRoutingModule } from './creditcards-routing.module';
import { CreditcardsComponent } from './creditcards.component';
import { AddCreditCardComponent } from './add-credit-card/add-credit-card.component';
import { ViewCreditCardComponent } from './view-credit-card/view-credit-card.component';
import { EditCreditCardComponent } from './edit-credit-card/edit-credit-card.component';
import { DeleteCreditCardComponent } from './delete-credit-card/delete-credit-card.component';
import { MatCardModule} from '@angular/material/card';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    CreditcardsComponent,
    AddCreditCardComponent,
    ViewCreditCardComponent,
    EditCreditCardComponent,
    DeleteCreditCardComponent
  ],
  imports: [
    CommonModule,
    CreditcardsRoutingModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class CreditcardsModule { }
