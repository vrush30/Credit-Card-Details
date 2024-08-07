import { Component, ViewChild } from '@angular/core';
import { Credicards } from '../models/credicards';
import { MatTableDataSource } from '@angular/material/table';
import { DataSource, SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CreditcardsService } from '../services/creditcards.service';
import {MatDialog} from '@angular/material/dialog';
import { AddCreditCardComponent } from './add-credit-card/add-credit-card.component';

// const TABLE_DATA: Credicards[] = [
//   {
//     "id":1,
//     "cardName": "Bank of America - Platinum card",
//     "bankName":"Bank of america",
//     "description":"Bank of America offers customers with variety of oprions",
//     "maxCredit":8000,
//     "active":true,
//     "annualFee":0,
//     "interestRate":13.5,
//     "introOffer":200,
//     "recommendedCreditScore":"600-800",
//     "numberOfApplications":40,
//     "createdDate":"28-08-2023",
//     "termsAndConditions":"The following conditions are applicable to the card"
// },
// {
//   "id":2,
//   "cardName": "Bank of Africa - Platinum card",
//   "bankName":"Bank of Africa",
//   "description":"Bank of Africa offers customers with variety of oprions",
//   "maxCredit":9000,
//   "active":false,
//   "annualFee":500,
//   "interestRate":10.5,
//   "introOffer":100,
//   "recommendedCreditScore":"500-800",
//   "numberOfApplications":80,
//   "createdDate":"28-07-2022",
//   "termsAndConditions":"The following conditions are applicable to the card"

// },
// {
//   "id":3,
//   "cardName": "Bank of America - Platinum card",
//   "bankName":"Bank of america",
//   "description":"Bank of America offers customers with variety of oprions",
//   "maxCredit":8000,
//   "active":true,
//   "annualFee":0,
//   "interestRate":13.5,
//   "introOffer":200,
//   "recommendedCreditScore":"600-800",
//   "numberOfApplications":40,
//   "createdDate":"28-08-2023",
//   "termsAndConditions":"The following conditions are applicable to the card"
// },
// {
//   "id":4,
//   "cardName": "Bank of Montreal - Gold card",
//   "bankName":"Bank of Montreal",
//   "description":"Bank of Montreal offers customers with variety of oprions",
//   "maxCredit":100000,
//   "active":true,
//   "annualFee":300,
//   "interestRate":15.5,
//   "introOffer":0,
//   "recommendedCreditScore":"635-835",
//   "numberOfApplications":100,
//   "createdDate":"02-04-2024",
//   "termsAndConditions":"The following conditions are applicable to the card"
// },
// {
//   "id":5,
//   "cardName": "Scotia bank - Platinum card",
//   "bankName":"Scotia bank",
//   "description":"Scotia bank offers customers with variety of oprions",
//   "maxCredit":9000,
//   "active":false,
//   "annualFee":0,
//   "interestRate":16.2,
//   "introOffer":100,
//   "recommendedCreditScore":"750-890",
//   "numberOfApplications":30,
//   "createdDate":"28-02-2024",
//   "termsAndConditions":"The following conditions are applicable to the card"
// },
// {
//   "id":6,
//   "cardName": "Bank of India - Regalia card",
//   "bankName":"Bank of India",
//   "description":"Bank of India offers customers with variety of oprions",
//   "maxCredit":1000000,
//   "active":true,
//   "annualFee":500,
//   "interestRate":14.5,
//   "introOffer":5000,
//   "recommendedCreditScore":"550-850",
//   "numberOfApplications":40,
//   "createdDate":"08-01-2024",
//   "termsAndConditions":"The following conditions are applicable to the card"
// }
// ];

@Component({
  selector: 'app-creditcards',
  templateUrl: './creditcards.component.html',
  styleUrls: ['./creditcards.component.scss']
})
export class CreditcardsComponent {

  displayColumns = [
    "select",
    "id",
    "cardName",
    "bankName",
    "description",
    "maxCredit",
    "active",
    "annualFee",
    "interestRate",
    "introOffer",
    "recommendedCreditScore",
    "numberOfApplications",
    "createdDate",
    "termsAndConditions",
    "actions"
  ];

  // dataSource = new MatTableDataSource(TABLE_DATA); 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  creditcardsDetails:Credicards[] = []; 
  selection = new SelectionModel(true, []);

  constructor(private creditCardService: CreditcardsService, public dialog: MatDialog){
    this.creditCardService.getCreditCard().subscribe(data => {
      this.creditcardsDetails = data;
      this.dataSource = new MatTableDataSource(this.creditcardsDetails);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  dataSource = new MatTableDataSource(this.creditcardsDetails);

  // ngAfterViewInit(){
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

  selectHandler(row: Credicards){
    this.selection.toggle(row as never);
  }

  openDialog(){
    const dialogRef = this.dialog.open(AddCreditCardComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }
}
