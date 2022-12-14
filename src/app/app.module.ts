import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component'
const myRoute:Routes = [
  {
    path:"",
    component:AdminComponent
  },
  {
    path:"addEmployee",
    component : AddEmployeeComponent
  },
  {
    path: "viewEmployee",
    component: ViewEmployeeComponent
  },
  {
    path:"searchEmployee",
    component : SearchEmployeeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NavbarComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent,
    AdminNavbarComponent,
    SearchEmployeeComponent,
    DeleteEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
