import { Player, Move  } from './models.barrel';

export class Play{
    constructor(public player:Player, public move:Move, public roundNumber:number){}
}