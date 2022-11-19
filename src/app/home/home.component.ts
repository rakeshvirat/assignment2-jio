import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { backend_url } from 'src/assets/urls';

export interface PeriodicElement {
  id: number;
  title: string;
  description: string;
  technology: string;
  specialization:string;
  owners:any;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  data:any=[]
  displayedColumns: string[] = ['id', 'title', 'description', 'technology','specialization','owners'];
  public constructor(private http: HttpClient ){}

  ngOnInit(): void {
    this.http.get(`${backend_url}`).subscribe(res=>{
      console.log(res)
      this.data=res
    })
  }

}
