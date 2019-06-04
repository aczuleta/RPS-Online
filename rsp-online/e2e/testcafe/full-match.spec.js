import { AngularSelector, waitForAngular } from 'testcafe-angular-selectors';
import  FullMatchPageModel from './full-match';
const fullMatchModel = new FullMatchPageModel();
fixture `Testing a full match`
.page `http://localhost:4200/`
 test('We will show a full match between two players and player One will win', async t => {
     await fullMatchModel.playerOneWins()
           .expect(fullMatchModel.winner.innerText).contains("One");
});

