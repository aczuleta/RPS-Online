import HomePageModel from './play';
const homePageModel = new HomePageModel();

fixture `We start to play!`
.page `http://localhost:4200/`;

test('We expect to move forward into the next page', async t => {
    await homePageModel.play()
            .setTestSpeed(0.5)
            .expect(homePageModel.matchMakerTitle.textContent).contains("Enter Player's Names");
});;