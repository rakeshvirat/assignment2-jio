import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProjectComponent } from './create-project/create-project.component';
import { HomeComponent } from './home/home.component';
import { SeeProjectComponent } from './see-project/see-project.component';
import { ProjectArchitectureComponent } from './project-architecture/project-architecture.component';

const routes : Routes =[
  {
    path:'',component:HomeComponent
  }
  ,
  {
    path:'create',component:CreateProjectComponent
  }
  ,
  {
    path:'seeproject',component:SeeProjectComponent
  }
  ,
  {
    path:'architectures',component:ProjectArchitectureComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
