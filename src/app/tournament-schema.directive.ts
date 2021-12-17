import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTournamentSchema]'
})
export class TournamentSchemaDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
