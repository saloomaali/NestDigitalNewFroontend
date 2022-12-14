import { Component } from '@angular/core'
import { ApiService } from '../api.service'

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  empId = ""
        email_Id = ""
        name = ""
        designation = ""
        username = ""
        password = ""
        salary = ""

        constructor(private api:ApiService){}

        readValue=()=>{

          let data:any = {"empId" : this.empId, "email_Id" : this.email_Id, "name": this.name, "designation" : this.designation, "username" : this.username, "password" : this.password, "salary" : this.salary}

          this.api.addEmployee(data).subscribe(
            (response:any)=>{

              
              if(response.status == "success"){
                localStorage.setItem("EmployeeId", response.EmployeeId)
                console.log(localStorage.getItem("EmployeeId"))
                alert("Employee added successfully")
                window.location.reload()
              }
            }
          )

        }

}
