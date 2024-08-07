import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credicards } from '../models/credicards';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CreditcardsService {

  private apiURL = "http://localhost:3000/creditcards"

  constructor(private httpClient: HttpClient,private router: Router) {
  
   }

  //CRUD functionality
  createCreditCard(creditCard: Credicards): Observable<Credicards> {
    return this.httpClient.post<Credicards>(this.apiURL,creditCard);
  }

  getCreditCard(): Observable<Credicards[]>{
    return this.httpClient.get<Credicards[]>(this.apiURL);
  }

  getCreditCardbyId(id: Number): Observable<Credicards>{
    const url = `${this.apiURL}/${id}`;
    return this.httpClient.get<Credicards>(url);
  }

  // update
  updateCreditCard(creditcard:Credicards): Observable<Credicards>{
    const updateUrl = `${this.apiURL}/${creditcard.id}`
    return this.httpClient.put<Credicards>(updateUrl, creditcard);
  }

  //delete
  DeleteCreditCardComponent(id: Number):Observable<void>{
    const deleteURL = `${this.apiURL}/${id}`
    return this.httpClient.delete<void>(deleteURL);
  }
}
