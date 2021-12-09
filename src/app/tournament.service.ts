import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, mapTo, Observable, of, tap } from 'rxjs';
import { MessageService } from './message.service';
import { TOURNAMENTS } from './mock_tour';
import { Tournoi } from '../interfaces/tournoi';
import { ObjectService } from './object.service';

@Injectable({
  providedIn: 'root'
})
export class TournamentService extends ObjectService<Tournoi> {

  getObjectUrl(): string {
    return 'tournois';
  }



  constructor(
    protected messageService: MessageService,
    protected http: HttpClient
  ) {
    super(messageService, http);
  }


}
