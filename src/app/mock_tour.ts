import { Tournament } from "./tournament";

export const TOURNAMENTS: Tournament[] = [
    {
        id: 1,
        name: 'Beach Volley',
        description: 'description',
        place: 'albert street',
        dateStart: new Date(2021, 12, 1),
        dateEnd: new Date(2021, 12, 15),
        game: 'volley',
        playersQty: 4,
        fieldsQty: 2,
    },
    {
        id: 2,
        name: 'Basket Tournament',
        place: 'Plaza !er',
        dateStart: new Date(2021, 10, 10),
        dateEnd: new Date(2021, 10, 20),
        game: 'Basket',
        playersQty: 12,
        fieldsQty: 6,
        description: 'Hobbie Tournament'
    },
    {
        id: 3,
        name: 'Foot Tournament',
        place: 'Plaza !er',
        dateStart: new Date(2021, 10, 10),
        dateEnd: new Date(2021, 10, 20),
        game: 'Foot',
        playersQty: 12,
        fieldsQty: 6,
        description: 'Hobbie Tournament'
    },
    {
        id: 4,
        name: 'Tennis Tournament',
        place: 'Plaza !er',
        dateStart: new Date(2021, 10, 10),
        dateEnd: new Date(2021, 10, 20),
        game: 'Tennis',
        playersQty: 12,
        fieldsQty: 6,
        description: 'Hobbie Tournament'
    },
    {
        id: 5,
        name: 'Swimming Tournament',
        place: 'Plaza !er',
        dateStart: new Date(2021, 10, 10),
        dateEnd: new Date(2021, 10, 20),
        game: 'Swimming',
        playersQty: 12,
        fieldsQty: 6,
        description: 'Hobbie Tournament'
    },
]