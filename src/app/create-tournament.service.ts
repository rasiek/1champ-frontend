import { Injectable } from '@angular/core';
import { Tournoi } from 'src/interfaces/tournoi';

@Injectable({
  providedIn: 'root'
})
export class CreateTournamentService {

  tournament: Tournoi = {}

  constructor() { }


}
