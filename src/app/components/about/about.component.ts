import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent  {
  form:FormGroup
  submited:boolean
  constructor(){
    this.submited=false;
    this.form=new FormGroup({
      name:new FormControl(""),
      age:new FormControl()
    })
  }
  public onSubmit(){
    this.submited=true
    console.log(this.form.value);
  }
  

}
