import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent {

  empId = ""
  
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

  deleteBtn=(id:any)=>{

    let data:any = {"id":id}

    this.api.deleteEmployee(data).subscribe(
      (response:any)=>{
        if (response.status == "success") 
        {
         alert("Employee Deleted Successfully") 
         window.location.reload()
        } else {

          alert("No employee found")
          
        }
      }
    )
  }
}
