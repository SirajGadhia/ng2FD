import { Ng2FDPage } from './app.po';

describe('ng2-fd App', function() {
  let page: Ng2FDPage;

  beforeEach(() => {
    page = new Ng2FDPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
