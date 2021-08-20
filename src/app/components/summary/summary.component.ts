import { Component, OnInit } from '@angular/core';
import { Summary } from 'src/app/model/summary.model';
import { TicketService } from 'src/app/services/ticket.service';
import { ResponseApi } from 'src/app/model/response-api';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  summary: Summary = new Summary();
  message: {};
  classCss: {};
  
  constructor(
    private service: TicketService
  ) { }

  ngOnInit() {

    this.service.summary().subscribe((response: ResponseApi)=>{
      this.summary = response.data;
    }), err => {
      this.showMessage({
        type: 'error',
        text: err['error']['errors'][0]
      })
    }

  }

  private showMessage(message: {type: string, text: string}) : void {
    this.message = message;
    this.buildClasses(message.type);
    setTimeout(() => {
      this.message = undefined;
    }, 3000);
  }

  private buildClasses(type: string) : void {
    this.classCss = {
      'alert' : true
    }
    this.classCss['alert'+type] = true;
  }

}
