import { NgModule } from "@angular/core";   
import { Route, RouterModule,Routes } from "@angular/router";
import { MainComponent } from "./main.component";
import { Card } from "../card.model";
import { CardComponent } from "./card/card.component";
import { CommonModule } from "@angular/common";
import { provideHttpClient } from "@angular/common/http";
import { AddcardComponent } from "./addcard/addcard.component";
import { FormsModule } from "@angular/forms";
import { EditComponent } from "./edit/edit.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from "./header/header.component";
import { ViewComponent } from "./view/view.component";



const routes : Routes = [
    {
        path:'',
        component:MainComponent
    }
];

@NgModule({
    declarations:[
        MainComponent,
        ViewComponent,
        CardComponent,
        EditComponent,
        HeaderComponent,
    AddcardComponent],
    imports:[CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes)],
    providers:[provideHttpClient()]
})
export class MainModule{}