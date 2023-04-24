import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  implements OnInit {
  @Input() dataEntrada:any;
  
  public image!:string;
  constructor() { }

  ngOnInit(): void {
    this.image = 'https://picsum.photos/200/300'
    console.log("Entrada: ", this.dataEntrada);
    
  }

}
