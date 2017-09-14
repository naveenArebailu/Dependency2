import { DepInjservice2Page } from './app.po';

describe('dep-injservice2 App', function() {
  let page: DepInjservice2Page;

  beforeEach(() => {
    page = new DepInjservice2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
