import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from '../../services/order-details.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

    constructor(private service:OrderDetailsService){}
    recipeData:any;
    ngOnInit(): void {
     this.service.getmenu().subscribe((res:any)=>{
        this.recipeData = Object.keys(res).map((key)=>res[key]);
     });
      
    }
  }
  


