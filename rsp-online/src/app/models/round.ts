import { Play } from './play';
import { Player } from './player';

export class Round {
    constructor(public number:number, public winner:Player){}
}