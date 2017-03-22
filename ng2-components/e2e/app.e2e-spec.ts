import { Angular2WebinarPage } from './app.po';

describe('angular2-webinar App', () => {
  let page: Angular2WebinarPage;

  beforeEach(() => {
    page = new Angular2WebinarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
