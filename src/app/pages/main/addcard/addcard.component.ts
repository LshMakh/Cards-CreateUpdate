import { Component } from '@angular/core';
import { CardsService } from '../../../cards.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Card } from '../../card.model';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.component.html',
  styleUrl: './addcard.component.css'
})
export class AddcardComponent {
  addForm:FormGroup;



  constructor(private fb:FormBuilder,public cardsService:CardsService, private authService:AuthService){
    this.addForm = this.fb.group({
      name:['', Validators.required],
      occupation:['', Validators.required],
      imageUrl:['', Validators.required]
    });
  }

  addCard():void{
    if(!this.addForm.valid) alert("enter valid form");
    else{
      const newCard :Card = this.addForm.value;
      this.cardsService.addCard(newCard).subscribe (response => {
        console.log('Card added successfully:', response);
        this.addForm.reset();
    });
  }
}
isAdmin(){
  return this.authService.isAdmin();
}
}
