export interface Tournoi {
  id?: string;
  name?: string;
  place?: string;
  rounds?: number;
  dateStart?: Date;
  dateEnd?: Date;
  game?: string;
  playersQty?: number;
  organizer?: string;
  teams?: string[];
  nbTeams?: number;
  fieldsQty?: number;
  description?: string;
}
