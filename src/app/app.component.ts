import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'aprendo-angular';
  public listaVideos:Array<any> = []

  ngOnInit(): void {
    this.listaVideos = [
      {
        title:"Video 1",
        subtitle:"Este video aun no tiene descripción",
        button: "Agregar a favoritos",
        img:'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1'

      },
      {
        title:"Video 2",
        subtitle:"Este video aun no tiene descripción ",
        button: "Agregar a favoritos",
        img:'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1'

      },
      {
        title:"Video 3",
        subtitle:"Este video aun no tiene descripción",
        button: "Agregar a favoritos",
        img:'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1'

      }
      
    ]
    
  
  }
}

