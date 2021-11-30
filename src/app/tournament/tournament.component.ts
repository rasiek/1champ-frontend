import { Component, OnInit } from '@angular/core';
import { Tournament } from '../tournament';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {

  tournament: Tournament = {
    id: 1,
    name: 'Beach Volley',
    description: 'description',
    place: 'albert street',
    dateStart: new Date(2021, 12, 1),
    dateEnd: new Date(2021, 12, 15),
    game: 'volley',
    playersQty: 4,
    fieldsQty: 2,
  };
  constructor() { }

  ngOnInit(): void {
  }

}
