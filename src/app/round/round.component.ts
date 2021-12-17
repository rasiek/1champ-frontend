import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.css']
})
export class RoundComponent implements OnInit {


  poolNum?: number;
  teamsByPool?: number;
  classificatedByPool?: number;
  name?: string;



  constructor() { }
  ngOnInit(): void {

  }

}
