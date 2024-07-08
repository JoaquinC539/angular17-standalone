import { Component, Output,EventEmitter, OnDestroy, Input } from '@angular/core';



@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnDestroy {
  @Input() message:string
  @Output() dataEmitter:EventEmitter<string>;

  constructor(){
    this.dataEmitter=new EventEmitter<string>();
    this.message="";
    
  }
  public sendData(){
    const data="Hello from child";
    this.dataEmitter.emit(data);
  }
  ngOnDestroy(): void {
      
  }
}
