import { Angular2CloudinaryProgressiveWebAppPage } from './app.po';

describe('angular2-cloudinary-progressive-web-app App', () => {
  let page: Angular2CloudinaryProgressiveWebAppPage;

  beforeEach(() => {
    page = new Angular2CloudinaryProgressiveWebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
