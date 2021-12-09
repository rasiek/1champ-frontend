import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Tournoi } from '../../interfaces/tournoi';
import { TournamentService } from '../tournament.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {

  tournaments: Tournoi[] = [];

  constructor(private tournamentService: TournamentService, private messageService: MessageService) { }

  getTournaments(): void {
    this.tournamentService.getList()
      .subscribe(tournaments => this.tournaments = tournaments);
  }

  ngOnInit(): void {
    this.getTournaments();
  }

}
