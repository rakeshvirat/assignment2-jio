import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { backend_url } from 'src/assets/urls';

@Component({
  selector: 'app-see-project',
  templateUrl: './see-project.component.html',
  styleUrls: ['./see-project.component.css']
})
export class SeeProjectComponent implements OnInit {
  data:any={}
  constructor(private http:HttpClient) { }

  public change(event:any)
  {
    console.log(+event.target.value)
    this.http.get(`${backend_url}/${+event.target.value}`).subscribe(res=>{
      console.log(res)
      this.data=res
    })
  }
  
  ngOnInit(): void {
  }

}
