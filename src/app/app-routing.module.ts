import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './pages/main/header/header.component';
import { CardComponent } from './pages/main/card/card.component';
import { Card } from './pages/card.model';
import { AuthGuard} from './auth.guard';
import { AddcardComponent } from './pages/main/addcard/addcard.component';
import { EditComponent } from './pages/main/edit/edit.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginGuard } from './login.guard';
import { ViewComponent } from './pages/main/view/view.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
    canActivate:[LoginGuard]
  },
  {
    path:'register',
    component:RegisterComponent,
    canActivate:[LoginGuard]
  },
  {
    path:'main',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule),
    canActivate:[AuthGuard]
   
  }, 
  {
    path:'add-card',
    component:AddcardComponent,
    canActivate:[AuthGuard]
  },{
    path:'edit-card/:id',
    component:EditComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'view/:id',
    component:ViewComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
