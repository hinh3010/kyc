import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KycComponent } from './kyc/kyc.component';


const routes: Routes = [
  {path : '' ,component: HomeComponent},
  {path : 'kyc' ,component: KycComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
