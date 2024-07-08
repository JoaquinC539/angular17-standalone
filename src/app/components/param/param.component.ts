import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-param',
  standalone: true,
  imports: [],
  templateUrl: './param.component.html',
  styleUrl: './param.component.css'
})
export class ParamComponent  implements OnInit{
  id:number
  queryParams:any;

  
  constructor(private route:ActivatedRoute){
    this.id=Number(this.route.snapshot.paramMap.get("id"))
    // Alternatively, to react to changes in the route parameter:
    // this.route.paramMap.subscribe(params => {
    //   this.itemId = params.get('id');
    this.queryParams=this.route.snapshot.queryParamMap
  }
  ngOnInit(): void {
      console.log(this.id)
      console.log(this.queryParams)
  }
  
}
