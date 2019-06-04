import { Selector, t } from 'testcafe';

export default class HomePageModel {
      
    private playBtn;
    public matchMakerTitle;
    
    constructor () {
        this.playBtn = Selector("#play_btn");
        this.matchMakerTitle =  Selector("#match_maker_title");
    }
    
    play() {
        return t
            .click(this.playBtn);
    }
}