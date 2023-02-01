import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsingPipesComponent } from './using-pipes/using-pipes.component';
import { GymComponent } from './gym/gym.component';

@NgModule({
  declarations: [
    AppComponent,
    UsingPipesComponent,
    GymComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
