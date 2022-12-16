import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {

  
  empId = ""
  name = ""
  designation = ""
  salary = ""
  email_Id = ""


  
  constructor(private api:ApiService){
  }
  searchData:any = []
  readValue=()=>{

    let data:any = {"empId" : this.empId}
    this.api.searchEmployee(data).subscribe(
      (response:any)=>{
        if (response.length == 0 ) {

          alert("No Such Employee Exist")
          
        } else {

          this.searchData = response
         
          
        }
        

      }
    )
  }
  editBtn=(id:any)=>{
     let data:any = {"id" : id, "empId" : this.empId, "name" : this.name, "desigantion": this.designation, "salary" : this.salary, "email_Id": this.email_Id}
     this.api.editEmployee(data).subscribe(
      (response:any)=>{
        if (response.status == "success") {

          alert("Employee details edited")
          window.location.reload()
          
        }
      }
     )
  }
  

  
}

  



