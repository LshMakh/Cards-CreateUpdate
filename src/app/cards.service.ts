import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Card } from './pages/card.model';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { AuthService } from './auth.service';


@Injectable({
    providedIn: 'root'
  })
  export class CardsService {
  
    constructor(private http:HttpClient, private authService:AuthService) { }
  
    cards:Card[] = [];
  
   
    getCard(searchTerm:string = '', occupationTerm:string=''):Observable<Card[]>{
      return this.http.get<Card[]>(`https://localhost:44332/api/Cards/GetCards?name=${searchTerm}&occupation=${occupationTerm}`);
    }
  
    get cardsList():Card[]{
  
      return this.cards;
    }
  
    set cardsList(list:Card[]){
        this.cards = list;
    }

    deleteCard(cardId: number): Observable<any> {
      // const token = localStorage.getItem('Token'); // Assuming you store your token in local storage
      // const httpOptions = {
      //     headers: new HttpHeaders({
      //         'Authorization': `Bearer ${token}` // Add the token here
      //     })
      // };
      return this.http.delete(`https://localhost:44332/api/Cards/DeleteCard/${cardId}`);
  }


    
  addCard(card: Card): Observable<any> {
    // const token = localStorage.getItem('Token'); // Assuming you store your token in local storage
    // let httpOptions = {
    //     headers: new HttpHeaders({
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${token}` // Add the token here
    //     })
    // };
    return this.http.post<any>("https://localhost:44332/api/Cards/SaveCard", card);
}

    getCardById(id: number): Observable<Card> {
      return this.http.get<Card>(`https://localhost:44332/api/Cards/GetCardbyId/${id}`);
    }
    
    updateCard(card: Card): Observable<any> {
      // const token = localStorage.getItem('Token'); 
      // const httpOptions = {
      //     headers: new HttpHeaders({
      //         'Content-Type': 'application/json',
      //         'Authorization': `Bearer ${token}` // Add the token here
      //     })
      // };
      return this.http.put(`https://localhost:44332/api/Cards/UpdateCard/${card.id}`, card);
  }
    
    


  }