import { Component, inject, OnInit } from '@angular/core';
import { Card } from '../../card.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CardsService } from '../../../cards.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit {
  card: Card = new Card(0, '', '', '');
  cardsService = inject(CardsService);

   
    constructor( private route: ActivatedRoute,){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cardsService.getCardById(Number(id)).subscribe((data) => {
        this.card = data;
      });
    }
  }

}
