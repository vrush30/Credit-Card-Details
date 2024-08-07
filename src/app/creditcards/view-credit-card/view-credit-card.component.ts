import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Credicards } from 'src/app/models/credicards';
import { CreditcardsService } from 'src/app/services/creditcards.service';

@Component({
  selector: 'app-view-credit-card',
  templateUrl: './view-credit-card.component.html',
  styleUrls: ['./view-credit-card.component.scss']
})
export class ViewCreditCardComponent {
  creditCardDetails!: Credicards;
  creditCardId!: number;
  constructor(private creditCardService: CreditcardsService, private router: ActivatedRoute){
    this.creditCardId = parseInt(this.router.snapshot.paramMap.get("id") || "");
    
    this.creditCardService.getCreditCardbyId(this.creditCardId).subscribe(data => {
      this.creditCardDetails = data;
    })
  }
}
