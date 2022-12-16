import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addEmployee=(dataToSend:any)=>{

    return this.http.post("http://localhost:8080/addEmployee", dataToSend)
  }

  viewEmployee=()=>
  {
    return this.http.get("http://localhost:8080/viewEmployee")
  }
  searchEmployee=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/searchEmployee",dataToSend)
  }
  deleteEmployee= (dataToSend:any) =>{

    return this.http.post("http://localhost:8080/deleteEmployee",dataToSend)
  }
  editEmployee = (dataToSend:any)=>{
    return this.http.post("http://localhost:8080/editEmployee ",dataToSend)

  }
  addSecurity=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/addSecurity",dataToSend)
  }
  viewSecurity=()=>{
    return this.http.get("http://localhost:8080/viewSecurity")
  }
  viewEmployeeLog=()=>{
    return this.http.get("http://localhost:8080/viewLog")
  }
  employeeLogByDate=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/viewLogDate",dataToSend)
  }
  viewVisitorsLog=()=>{
    return this.http.get("http://localhost:8080/viewLogVisitors")
  }
  visitorsLogByDate=(dataToSend:any)=>{

    return this.http.post("http://localhost:8080/viewLogDateVisitors",dataToSend)
  }
}
