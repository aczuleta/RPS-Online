import { Component, OnInit } from '@angular/core';
import { RulesetService } from '../../../services/ruleset.service';
import { fade } from '../../../animations/animations.barrel';

@Component({
  selector: 'ruleset-maker',
  templateUrl: './ruleset-maker.component.html',
  styleUrls: ['./ruleset-maker.component.scss'],
  animations: [fade]
})
export class RulesetMakerComponent implements OnInit {

  public moves:Array<any>;
  public move:String;
  public kills:number;
  public rulesetName:string;
  public base64textString:String="";
  public displayedColumns: string[] = ['check', 'move', 'kills'];
  public editableMove = null;
  
  public moves$;

  constructor(private ruleService:RulesetService) { }

  ngOnInit() {
    this.moves$ = this.ruleService.getMoves();
  }

  createMove(name:string, imageRoute:string, kill:number){
    this.ruleService.createMove(name, imageRoute, [kill]);
  }

  addMoves(moves){
      this.moves = moves;
  }

  selectToEdit(move){
    this.editableMove = move;
  }

  editMove(id:number, name:string, imageRoute:string, kill:number){
    let route = imageRoute ? imageRoute : this.editableMove.imageRoute;
    this.editableMove = null;
    this.ruleService.editMove(id, name, route, [kill]);
  }

  createRuleset(name:string, moves:Array<any>){
    moves = moves.filter(x => x.checked);
    moves = moves.map( x => +x.id);
    this.ruleService.createRuleset(name, moves);
  }



  handleFileSelect(evt){
    var files = evt.target.files;
    var file = files[0];
    if (files && file) {
        var reader = new FileReader();
        reader.onload =this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
     let binaryString = readerEvt.target.result;
      this.base64textString= btoa(binaryString);
  }
}
