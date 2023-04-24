import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'aprendo-angular';
  public cards:Array<any> = []

  ngOnInit(): void {
    this.cards = [
      {
        title:"Video 1",
        subtitle:"Suntitle video 1"

      },
      {
        title:"Video 2",
        subtitle:"Suntitle video "

      },
      {
        title:"Video 3",
        subtitle:"Suntitle video "

      },
      {
        title:"Video 3",
        subtitle:"Suntitle video "

      }
    ]
    
  
  }
}

