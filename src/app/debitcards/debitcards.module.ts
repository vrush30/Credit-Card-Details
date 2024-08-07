import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DebitcardsRoutingModule } from './debitcards-routing.module';
import { DebitcardsComponent } from './debitcards.component';
import { AdddebitcardComponent } from './adddebitcard/adddebitcard.component';
import { EditdebitcardComponent } from './editdebitcard/editdebitcard.component';
import { ViewdebitcardComponent } from './viewdebitcard/viewdebitcard.component';
import { DeletedebitcardComponent } from './deletedebitcard/deletedebitcard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    DebitcardsComponent,
    AdddebitcardComponent,
    EditdebitcardComponent,
    ViewdebitcardComponent,
    DeletedebitcardComponent
  ],
  imports: [
    CommonModule,
    DebitcardsRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ]
})
export class DebitcardsModule { }
