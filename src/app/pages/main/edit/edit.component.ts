import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardsService } from '../../../cards.service';
import { Card } from '../../card.model';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  card: Card = new Card(0, '', '', '');
  editForm:FormGroup;

  constructor(
    private fb:FormBuilder,
    private route: ActivatedRoute,
    private cardsService: CardsService,
    private router: Router 
  ) {
    this.editForm = this.fb.group({
      name:['',Validators.required],
      occupation:['', Validators.required],
      imageUrl:['', Validators.required]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cardsService.getCardById(Number(id)).subscribe((data) => {
        this.card = data;

        this.editForm.patchValue({
          name:this.card.name,
          occupation:this.card.occupation,
          imageUrl: this.card.imageUrl
        });
      });
    }
  }

  updateCard(): void {
    if (this.editForm.valid) {
      const updatedCard = {
        ...this.card,
        ...this.editForm.value
      };
      this.cardsService.updateCard(updatedCard).subscribe((response) => {
        console.log('Card updated:', response);
        this.router.navigate(['/main']);
      });
    }
  }
}
