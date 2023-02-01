import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GymComponent } from './gym/gym.component';
import { UsingPipesComponent } from './using-pipes/using-pipes.component';

const routes: Routes = [
  {path : 'using' , component: UsingPipesComponent},
  {path : 'gym/gym' , component: GymComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
