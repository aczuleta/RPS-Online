import { Selector, t } from 'testcafe';
import { AngularSelector, waitForAngular } from 'testcafe-angular-selectors';
import Constants from './constants';

export default class MakeMatchPageModel {
    
    public startBtn;
    public scoreSummary;
    private p1Input;
    private p2Input;
    private ruleSelect;
    private traditionalRuleset;
    private constants = new Constants();

    constructor () {
        this.startBtn = Selector("#start_match_btn");
        this.p1Input = Selector("#player1_input_username");
        this.p2Input = Selector("#player2_input_username");
        this.scoreSummary = Selector("#score_summary");
        this.ruleSelect = Selector('[class^="mat-select-placeholder ng-tns-c5-4 ng-star-inserte"]');
        this.traditionalRuleset = Selector('span').withText('Traditional');
    }
    
    typeUsers(){
        return t
        .typeText(this.p1Input, this.constants.player1)
        .click(this.startBtn)
        .typeText(this.p2Input, this.constants.player2)
    }

    incompleteFields() {
        return t
                .typeText(this.p1Input, this.constants.player1)
                .click(this.startBtn)
                .typeText(this.p2Input, this.constants.player2)
                .click(this.startBtn);
    }

    completeFields(){
        return t
                .typeText(this.p1Input, this.constants.player1)
                .click(this.startBtn)
                .typeText(this.p2Input, this.constants.player2)
                .click(this.ruleSelect)
                .click(this.traditionalRuleset)
                .click(this.startBtn);
    }
}