import { Injectable, OnInit } from '@angular/core';
import {HttpClient}  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService implements OnInit {

  api="http://localhost:3000/reciprData";
  constructor(private http:HttpClient){ }
  ngOnInit(): void {
      console.log('ngOninit');
  }
  getmenu(){
    return this.http.get(this.api);
  }


  deleteFromJson(id:number | string){
    this.http.delete (this.api+"/"+id).subscribe({
      next:data =>{
        alert("Deleted SuccessFully")
      },
      error: error => {
        alert("There was an error!")
        console.error('There was an error!', error);
      }
    });

  }

  updateByDelete(id:number | string, data:any){
    console.log(data);
    return this.http.put(this.api+"/"+id,data);
  }

  updateJson(data:any){
    this.http.post(this.api,data).subscribe((res)=>{
      console.log(res);
    });
  }

}
