import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgSelectModule} from '@ng-select/ng-select'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,NgFor,NgSelectModule,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'currency_converter';
  currencies:any[]=[]
  selectedcurrency:any=null
  tocurrency:any=null
  fromvale:number=0
  toval:number=0
  constructor(){
    fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json')
    .then((response)=>response.json())
    .then((data)=>{
      this.currencies=Object.entries(data).map(([code,name])=>({
        code,
        name
      }))
    })
  }
  fromval(event:any){
    this.fromvale=event.target.value
    
  }
  Calculate(){
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${this.selectedcurrency}.json`)
    .then((response)=>response.json())
    .then((data)=>{
      this.toval = this.fromvale * data[this.selectedcurrency][this.tocurrency]
     
    })
    
  }
}
