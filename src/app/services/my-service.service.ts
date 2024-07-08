import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable(
  {
  providedIn: 'root',
}
)
export class MyService {
  public dataSubject=new Subject<any>();
  data$=this.dataSubject.asObservable();
  constructor(private http:HttpClient) { 

  }
  

  sendData(data:any){
    this.dataSubject.next(data);
    
  }
  
  fetchFromApi(){

   return this.http.get("https://reqres.in/api/users?page=2")
  }
}
