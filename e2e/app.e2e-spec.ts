import { Beans3Page } from './app.po';

describe('beans3 App', () => {
  let page: Beans3Page;

  beforeEach(() => {
    page = new Beans3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
