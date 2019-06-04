import { Selector, t } from 'testcafe';

export default class FullmatchPageModel {
    constructor(){
        this.winner = Selector("#match_winner_title");
    }

    playerOneWins() {
        return t
        .click(Selector('#play_btn'))
        .typeText(Selector('#player1_input_username'), 'One')
        .typeText(Selector('#player2_input_username'), 'Two')
        .click(Selector('[class^="mat-select-placeholder ng-tns-c5-4 ng-star-inserte"]'))
        .click(Selector('span').withText('Traditional'))
        .click(Selector('#start_match_btn'))
        .click(Selector('div').withText('Rock').nth(4).find('.player-move__img-move.clickable'))
        .click(Selector('div').withText('Scissors').nth(4).find('.player-move__img-move.clickable'))
        .click(Selector('h4').withText('One'))
        .click(Selector('div').withText('Scissors').nth(4).find('.player-move__img-move.clickable'))
        .click(Selector('div').withText('Rock').nth(4).find('.player-move__img-move.clickable'))
        .click(Selector('h4').withText('Two'))
        .click(Selector('div').withText('Paper').nth(4).find('.player-move__img-move.clickable'))
        .click(Selector('div').withText('Paper').nth(4).find('.player-move__img-move.clickable'))
        .click(Selector('h4').withText('Draw'))
        .click(Selector('div').withText('Rock').nth(4).find('.player-move__img-move.clickable'))
        .click(Selector('div').withText('Scissors').nth(4).find('.player-move__img-move.clickable'))
        .click(Selector('div').withText('Paper').nth(4).find('.player-move__img-move.clickable'))
        .click(Selector('div').withText('Rock').nth(4).find('.player-move__img-move.clickable'));
    }
};

