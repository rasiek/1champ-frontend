import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Organizer } from 'src/interfaces/organizer';
import { MessageService } from './message.service';
import { ObjectService } from './object.service';

@Injectable({
  providedIn: 'root'
})
export class OrganizerService extends ObjectService<Organizer> {


  getObjectUrl(): string {
    return 'organizers';
  }

  constructor(protected messageService: MessageService, protected http: HttpClient) {
    super(messageService, http);
  }


}
