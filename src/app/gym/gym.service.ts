import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

//Resposta do servidor
export interface GypResponseModel{
  id: number;
  name: string;
  namefantasy: string;
  location : string;
}
//Resposta do User
export interface GypModel{
  name: string;
  location : string;
}

@Injectable({
  providedIn: 'root'
})
export class GymService {

  get (): Observable<GypModel[]>{
    return of([ //of converte matriz em Observable
      {
        id: 1000,
        name: 'Biofit Campus 4',
        namefantasy: 'Biofit',
        location : 'Rua Mazaroppi',
      },
      {
        id: 2000,
        name: 'MaisFit Ozellia Six',
        namefantasy: 'MaisFit',
        location : 'Rua Tennorio Boy',
      }
    ]).pipe(map((gyms) => this.toUser(gyms)));
  }

   ///metodo responsavel por converter a resposta do servidor em resposta apresentavel ao usuario 
   toUser(gyms : GypResponseModel[]) : GypModel[]{
    return gyms.map(gym => ({
      name: gym.name,
      location: gym.location
    }));
  }
}
