import { AngularSelector, waitForAngular } from 'testcafe-angular-selectors';
import HomePageModel from './play';
import MakeMatchPageModel from './make-match';

const homePageModel = new HomePageModel();
const makeMatchModel = new MakeMatchPageModel();

fixture `Tests related with the match making`
.page `http://localhost:4200/`
.beforeEach( async t => {
    //Primero debemos garantizar que estamos logueados antes de proseguir con la selección de la sucursal
    await waitForAngular();
    await homePageModel.play();
});

test('We show that you need to select a ruleset and fill both usernames in order to begin the match', async t => {
    await makeMatchModel.incompleteFields()
          .expect(makeMatchModel.startBtn.hasClass("match-maker__main-btn--disabled")).eql(true);
});

test('We show that once you fill all the fields in the match making screen you can proceed into the next screen', 
    async t => {
    await makeMatchModel.completeFields()
          .expect(makeMatchModel.scoreSummary.innerText).contains("Score");
});