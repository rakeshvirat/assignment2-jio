import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { backend_url } from 'src/assets/urls';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  @Input() item = ''; 
  owners:any=[]
  constructor(private http: HttpClient) { }

  public create(form:NgForm)
  {
    let dummy:any=[]
    this.http.get(`${backend_url}`).subscribe(res=>{
      console.log(res)
      dummy=res
      console.log(dummy.length)
    })
    console.log({...form.value,id:dummy.length+1})
    this.http.post(`${backend_url}`,{...form.value,owners:this.owners}).subscribe(res=>{
      console.log(res)
      form.reset()
      this.owners=[]
    })
  }

  public AddingOwners(event:any)
  {
    console.log(event.target.previousSibling.value)
    if(!this.owners.includes(event.target.previousSibling.value))
    {
      if(event.target.previousSibling.value =='')
      {
        window.alert(`owner can't be empty`)
      }
      else
      {
        this.owners.push(event.target.previousSibling.value)
        event.target.previousSibling.value=""
        console.log(this.owners)
      }
    }
    else
    {
      window.alert(`${event.target.previousSibling.value} owner is already added`)
      event.target.previousSibling.value=""
      console.log(this.owners)
    }
  }

  public deletion(id:any)
  {
    console.log(id)
    this.owners.splice(id,1)
  }

  ngOnInit(): void {
  }

}
