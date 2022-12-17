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
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { HomeComponent } from './home/home.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { AddSecurityComponent } from './add-security/add-security.component';
import { ViewSecurityComponent } from './view-security/view-security.component';
import { EmployeeLogComponent } from './employee-log/employee-log.component';
import { VisitorsLogComponent } from './visitors-log/visitors-log.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { ViewEmployeeProfileComponent } from './view-employee-profile/view-employee-profile.component';
import { EmployeeNavbarComponent } from './employee-navbar/employee-navbar.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { LeaveStatusComponent } from './leave-status/leave-status.component'
const myRoute:Routes = [

  {
    path:"",
    component : HomeComponent
  },
  {
    path:"admin",
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
  },
  {
    path:"deleteEmployee",
    component : DeleteEmployeeComponent
  },
  {
    path:"editEmployee",
    component : EditEmployeeComponent
  },
  {
    path:"addSecurity",
    component : AddSecurityComponent
  },
  {
    path:"viewSecurity",
    component : ViewSecurityComponent
  },
  {
    path : "employeeLog",
    component : EmployeeLogComponent
  },
  {
    path : "visitorsLogin",
    component : VisitorsLogComponent
  },
  {
    path : "employeeLogin",
    component : EmployeeLoginComponent
  },
  {
    path : "viewProfileEmployee",
    component : ViewEmployeeProfileComponent
  },
  {
    path: "applyLeave",
    component : ApplyLeaveComponent
  },
  {
    path:  "leaveStatus",
    component : LeaveStatusComponent
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
    DeleteEmployeeComponent,
    HomeComponent,
    EditEmployeeComponent,
    AddSecurityComponent,
    ViewSecurityComponent,
    EmployeeLogComponent,
    VisitorsLogComponent,
    EmployeeLoginComponent,
    ViewEmployeeProfileComponent,
    EmployeeNavbarComponent,
    ApplyLeaveComponent,
    LeaveStatusComponent
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
