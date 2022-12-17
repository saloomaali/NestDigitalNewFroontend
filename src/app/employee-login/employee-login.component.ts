import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {

  constructor(private api:ApiService,private route:Router){

  }
  username = ""
  password = ""

  readValue=()=>{
    let data:any = {"username" : this.username, "password" : this.password}

    this.api.employeeLogin(data).subscribe(
      (response:any)=>{
        if (response.status == "success") {

          let id = response.employee_Id
          localStorage.setItem("EmpInfo", id)
          this.route.navigate(['/viewProfileEmployee'])
          
        } else {
          
          alert("Invalid credentials")
          window.location.reload()
        }
      }
    )

  }


}
