import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from '../model/ticket.model';
import { HELP_DESK_API } from './helpdesk.api';
import { Title } from '@angular/platform-browser';

@Injectable()
export class TicketService {

  constructor(private http: HttpClient) { }

  createOrUpdate(obj: Ticket) {
    // tslint:disable-next-line:triple-equals
    if (obj.id != null && obj.id != '') {
      return this.http.put(`${HELP_DESK_API}/api/ticket`, obj);
    } else {
      obj.id = null;
      obj.status = 'New';
      return this.http.post(`${HELP_DESK_API}/api/ticket`, obj);
    }
  }

  findAll(page: number, count: number) {
    return this.http.get(`${HELP_DESK_API}/api/ticket/${page}/${count}`);
  }

  findById(id: string) {
    return this.http.get(`${HELP_DESK_API}/api/ticket/${id}`);
  }

  delete(id: string) {
    return this.http.delete(`${HELP_DESK_API}/api/ticket/${id}`);
  }

  findByParams(page: number, count: number, assignedToMe: boolean, t: Ticket) {
    t.numero = t.numero == null ? 0 : t.numero;
    // tslint:disable-next-line:triple-equals
    t.title = t.title == '' ? 'uninformed' : t.title;
    // tslint:disable-next-line:triple-equals
    t.status = t.status == '' ? 'uninformed' : t.status;
    // tslint:disable-next-line:triple-equals
    t.priority = t.priority == '' ? 'uninformed' : t.priority;
    return this.http.get(`${HELP_DESK_API}/api/ticket/${page}/${count}/${t.numero}/${t.title}/${t.status}/${t.priority}/${assignedToMe}/`);
  }

  changeStatus(status: string, t: Ticket) {
    return this.http.put(`${HELP_DESK_API}/api/ticket/${t.id}/${status}`, t);
  }

  summary() {
    return this.http.get(`${HELP_DESK_API}/api/ticket/summary`);
  }

}
