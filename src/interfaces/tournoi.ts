export interface Tournoi {
  id?: string;
  name?: string;
  place?: string;
  dateStart?: Date;
  dateEnd?: Date;
  game?: string;
  playersQty?: number;
  organizer?: string;
  teams?: string[];
  fieldsQty?: number;
  description?: string;
}
