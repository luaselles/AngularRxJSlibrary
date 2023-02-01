import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GymService, GypModel } from './gym.service';



@Component({
  selector: 'app-gym',
  templateUrl: './gym.component.html',
  styleUrls: ['./gym.component.scss']
})
export class GymComponent implements OnInit{
  gyms$!: Observable<GypModel[]>;

  constructor(private gymService: GymService){}

  ngOnInit(): void {
    //usando Observable e subscribe
    
    // this.gymService.get().subscribe((gyms) => {
    //   this.gyms = this.toUser(gyms);
    // });

    this.gyms$ = this.gymService.get();
  }

}
