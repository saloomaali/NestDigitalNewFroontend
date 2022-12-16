import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-visitors-log',
  templateUrl: './visitors-log.component.html',
  styleUrls: ['./visitors-log.component.css']
})
export class VisitorsLogComponent {
  date = ""
  constructor(private api:ApiService){

    this.api.viewVisitorsLog().subscribe(
      (response)=>{
        this.data = response

      }
    )

  }

  readValue=()=>{
    let data1:any = {"date" : this.date}

    this.api.visitorsLogByDate(data1).subscribe(
      (response:any)=>{

        if (response.length == 0) {

          alert("No entry in given date")
          window.location.reload()
          
        } else {

          this.data = response
          
        }
        
      }
    )
    
  }
  data:any = []


}
