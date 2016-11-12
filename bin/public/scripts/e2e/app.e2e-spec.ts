import { UmberuiPage } from './app.po';

describe('umberui App', function() {
  let page: UmberuiPage;

  beforeEach(() => {
    page = new UmberuiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
