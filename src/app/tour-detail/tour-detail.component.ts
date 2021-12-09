import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tournoi } from 'src/interfaces/tournoi';
import { TournamentService } from '../tournament.service';

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.scss']
})
export class TourDetailComponent implements OnInit {

  @Input() tour?: Tournoi;

  constructor(
    private route: ActivatedRoute,
    private tournamentService: TournamentService,
    private location: Location
  ) { }

  ngOnInit(): void {

    this.getTournament();
  }

  getTournament(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.tournamentService.get(id)
      .subscribe(tour => this.tour = tour);
  }

  goBack(): void {
    this.location.back();
  }

}
