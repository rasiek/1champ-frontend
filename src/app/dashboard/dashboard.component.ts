import { Component, OnInit } from '@angular/core';
import { Tournoi } from 'src/interfaces/tournoi';
import { TournamentService } from '../tournament.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tournaments: Tournoi[] = [];
  constructor(private tournamentService: TournamentService) { }

  ngOnInit(): void {
    this.getTournaments();
  }

  getTournaments(): void {
    this.tournamentService.getList()
      .subscribe(tournaments => this.tournaments = tournaments.slice(1, 5));
  }
}
