import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-using-pipes',
  templateUrl: './using-pipes.component.html',
  styleUrls: ['./using-pipes.component.scss']
})
export class UsingPipesComponent  implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  livro : any = {
    titulo : 'Querida Penelope',
    rating : 12.3112,
    numeroPaginas: 314,
    preco: 16.90, 
    dataLancamento: new Date(2022,5,23),
    url:'http://aaaa'
  };

}
