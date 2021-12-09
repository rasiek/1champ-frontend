import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Tournoi } from '../../interfaces/tournoi';
import { TournamentService } from '../tournament.service';

@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.scss']
})
export class CreateTournamentComponent implements OnInit {

  model = {} as Tournoi;

  createTournamentForm = this.fB.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    organizer: ['', Validators.required],
    place: ['', Validators.required],
    game: ['', Validators.required],
    dateStart: ['', Validators.required],
    dateEnd: [''],
    playersQty: ['', Validators.required],
    fieldsQty: ['', Validators.required],
  })

  submitted = false;

  constructor(private tournamentService: TournamentService, private fB: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // this.submitted = true;

    this.model.teams = [];
    this.model.name = this.createTournamentForm.value['name'];
    this.model.organizer = this.createTournamentForm.value['organizer'];
    this.model.description = this.createTournamentForm.value['description'];
    this.model.place = this.createTournamentForm.value['place'];
    this.model.game = this.createTournamentForm.value['game'];
    this.model.dateStart = this.createTournamentForm.value['dateStart'];
    this.model.dateEnd = this.createTournamentForm.value['dateEnd'];
    this.model.playersQty = this.createTournamentForm.value['playersQty'];
    this.model.fieldsQty = this.createTournamentForm.value['fieldsQty'];

    console.log(this.model);


    this.tournamentService.add(this.model)
      .subscribe(tour => console.log(tour));
    // console.warn(this.createTournamentForm.value);

  }

}
