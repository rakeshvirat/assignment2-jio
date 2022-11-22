import { Component, } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'assignment2';

  toggleB(e:any)
  {
    e.target.classList.add('active')
    if(e.target.getAttribute('id')=="tab1")
    {
      document.getElementById("tab2")?.classList.remove('active')
    }
    else if(e.target.getAttribute('id')=="tab2")
    {
      document.getElementById("tab1")?.classList.remove('active')
    }
  }
}
