import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  public imgSidebar!:string;
  constructor() { }

  ngOnInit(): void {
    this.imgSidebar = 'https://picsum.photos/200/300'
    
  }

}
