import { Component, inject, Inject, OnDestroy, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { MyService } from '../../services/my-service.service';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit,OnDestroy {
  receivedData:string
  subData:any
  dataSubscription:Subscription;
  fetchData:{[key:string]:any};
  fetchSub:Subscription ;
  load:boolean;
  
  constructor(private service:MyService){
    this.receivedData="";
    this.fetchSub=new Subscription();    
    this.dataSubscription=new Subscription()
    this.fetchData={};
    this.load=true;
    
  }

  receivData(data:string){
    this.receivedData=data
  }

  ngOnInit(): void {
    this.dataSubscription= this.service.data$.subscribe(
      (data:any)=>{
        this.load=false;
        this.subData=data;
      
     },
    (error:any)=>{
      console.error("Error at getting dta",error)
    })
    this.fetchData={};
    this.fetchSub=this.service.fetchFromApi()
      .subscribe((data:{[key:string]:any})=>{
      this.fetchData=data;
      
    })
      
  }
  triggerSub():void{  
    this.service.sendData("hello");
  }
  ngOnDestroy(): void {    
      this.fetchSub.unsubscribe();
      this.dataSubscription.unsubscribe();
  }

}
