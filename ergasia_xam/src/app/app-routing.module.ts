import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './Components/user/user.component';
import { RoleComponent } from './Components/role/role.component';
import { DataTableComponent } from './data-table/data-table.component';


const routes: Routes = [
  {path: "users" , component : UserComponent},
  {path: "roles" , component : RoleComponent},
  {path: 'data', component: DataTableComponent},
  {path: "" , redirectTo: '/users' , pathMatch: 'full'}, // redirect to user-component if the path is empty
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { };
