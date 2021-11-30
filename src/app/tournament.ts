export interface Tournament {
    id: number;
    name: string;
    description: string;
    place: string;
    dateStart: Date;
    dateEnd: Date;
    game: string;
    playersQty: number;
    fieldsQty: number;
}