export class Move {
    constructor(public name:string, public kills:Array<string>, public imageRoute:string){
        this.name = name;
        this.kills = kills;
        this.imageRoute = imageRoute;
    }
}