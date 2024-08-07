import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditcardsService } from 'src/app/services/creditcards.service';

@Component({
  selector: 'app-delete-credit-card',
  templateUrl: './delete-credit-card.component.html',
  styleUrls: ['./delete-credit-card.component.scss']
})
export class DeleteCreditCardComponent {
  creditCardId!:number;
  constructor(private router: ActivatedRoute, private creditCardService: CreditcardsService, private route:Router){

    this.creditCardId = parseInt(this.router.snapshot.paramMap.get("id") || "");
    this.creditCardService.DeleteCreditCardComponent(this.creditCardId).subscribe(data => {
      alert("deleted");
      this.route.navigate(['creditcards'])
    })
  }
}
