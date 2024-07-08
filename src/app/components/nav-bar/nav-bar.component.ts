import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent{
  titles:{[key:string]:any}[]=[
    {name:"home",path:"/"},
    {name:"about",path:"about"},
    {name:"parent",path:"parent"},
    {name:"params",path:"params/1"}
  ];
  constructor(){

  }
}
