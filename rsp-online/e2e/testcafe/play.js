import { Selector, t } from 'testcafe';

export default class HomePageModel {
        
    constructor () {
        this.playBtn = Selector("#play_btn");
        this.matchMakerTitle =  Selector("#match_maker_title");
    }
    
    async play() {
        return t
            .click(this.playBtn);
    }
}