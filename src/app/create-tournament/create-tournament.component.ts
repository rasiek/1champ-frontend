import { Component, OnInit, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RouteConfigLoadStart } from '@angular/router';
import { Round } from 'src/interfaces/rounds';
import { Tournoi } from '../../interfaces/tournoi';
import { RoundComponent } from '../round/round.component';
import { TeamComponent } from '../team/team.component';
import { TournamentSchemaDirective } from '../tournament-schema.directive';
import { TournamentService } from '../tournament.service';


@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.css']
})
export class CreateTournamentComponent implements OnInit {

  tournament = {} as Tournoi;
  round = {} as Round;
  rounds: Round[] = [];
  tourFormValidated = false;
  countRounds = 0;

  @ViewChild(TournamentSchemaDirective, { static: true }) appTournamentSchema!: TournamentSchemaDirective;


  addRound(poolNum: number, classificatedByPool: number, teamsNum: number, name: string = "First Round") {

    const viewContainerRef = this.appTournamentSchema.viewContainerRef;

    const componentRef = viewContainerRef.createComponent(RoundComponent)

    componentRef.instance.name = name;
    componentRef.instance.teamsByPool = teamsNum / poolNum;
    componentRef.instance.poolNum = poolNum;
    componentRef.instance.classificatedByPool = classificatedByPool;

  }



  createRoundForm = this.fB.group({
    poolsNb: ['', Validators.required],
    classificatedByPool: ['', Validators.required],
    name: [''],

  });

  createTourForm = this.fB.group({

    name: ['', Validators.required],
    roundsNb: ['', Validators.required],
    teamsNb: ['', Validators.required],
    firstRoundClassificated: ['', Validators.required],
    firstRoundName: [''],

  })


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


  constructor(private tournamentService: TournamentService, private fB: FormBuilder) { }

  ngOnInit(): void {
  }

  count = new Array

  onValidateRoundForm() {

    this.round.classificatedByPool = this.createRoundForm.value['classificatedByPool'];
    this.round.name = this.createRoundForm.value['name'];
    this.round.poolsNb = this.createRoundForm.value['poolsNb'];

    this.rounds.push(this.round);

    this.createRoundForm.reset();

    console.log(this.rounds);


  }

  onValidateTourForm() {

    this.tournament.name = this.createTourForm.value['name'];
    this.tournament.nbTeams = this.createTourForm.value['teamsNb'];
    this.tournament.rounds = this.createTourForm.value['roundsNb'];
    
    this.createTourForm.value['firstRoundName']
    ? this.addRound(this.createTourForm.value['roundsNb'], 4, this.createTourForm.value['teamsNb'], this.createTourForm.value['firstRoundName'])
      : this.addRound(this.createTourForm.value['roundsNb'], 4, this.createTourForm.value['teamsNb'])
    

    this.tourFormValidated = true
  }

  onSubmit() {
    // this.submitted = true;

    this.tournament.teams = [];
    this.tournament.name = this.createTournamentForm.value['name'];
    this.tournament.organizer = this.createTournamentForm.value['organizer'];
    this.tournament.description = this.createTournamentForm.value['description'];
    this.tournament.place = this.createTournamentForm.value['place'];
    this.tournament.game = this.createTournamentForm.value['game'];
    this.tournament.dateStart = this.createTournamentForm.value['dateStart'];
    this.tournament.dateEnd = this.createTournamentForm.value['dateEnd'];
    this.tournament.playersQty = this.createTournamentForm.value['playersQty'];
    this.tournament.fieldsQty = this.createTournamentForm.value['fieldsQty'];

    console.log(this.tournament);


    this.tournamentService.add(this.tournament)
      .subscribe(tour => console.log(tour));
    // console.warn(this.createTournamentForm.value);

  }

}
