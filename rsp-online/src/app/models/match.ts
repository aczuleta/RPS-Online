import {Player, Round, Ruleset} from './models.barrel';
export class Match {
    constructor(public p1:Player, 
                public p2:Player, 
                public rounds: Array<Round>, 
                public ruleset: Ruleset){

    }
}