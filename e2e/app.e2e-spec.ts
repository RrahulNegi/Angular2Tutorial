import { SearchEnginePage } from './app.po';

describe('search-engine App', function() {
  let page: SearchEnginePage;

  beforeEach(() => {
    page = new SearchEnginePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
