const defaultStart:Array<boolean> = [false, false, false];
export class Player{
    constructor(public username:string, public matchStatus:Array<boolean> = defaultStart){
        this.username = username;
    }
}