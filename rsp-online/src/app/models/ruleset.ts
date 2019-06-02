import { Move } from './move';

export class Ruleset{
    constructor(public id:number, public name:String, public moves:Array<Move>){}
}