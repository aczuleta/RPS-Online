import { Selector, t } from 'testcafe';
import { AngularSelector, waitForAngular } from 'testcafe-angular-selectors';
import Constants from './constants';

export default class MakeMatchPageModel {
    
    public startBtn;
    public scoreSummary;
    private p1Input;
    private p2Input;
    private ruleSelect;
    private constants = new Constants();

    constructor () {
        this.startBtn = Selector("#start_match_btn");
        this.p1Input = Selector("#player1_input_username");
        this.p2Input = Selector("#player2_input_username");
        this.scoreSummary = Selector("#score_summary");
        this.ruleSelect = AngularSelector('mat-option');
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
                .click(this.ruleSelect.withAttribute('data-ruleset', `ruleset-${this.constants.defaultRuleset}`))
                .click(this.startBtn);
    }
}