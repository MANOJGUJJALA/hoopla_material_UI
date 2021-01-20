import { AppPage } from './app.po';
import { browser, logging , by , element} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

 /* it('should display welcome message', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('hoopla-material-ui-ses app is running!');
  });
  */

  it('should display welcome message', async () => {
    browser.waitForAngularEnabled(false)
    await browser.get("http://localhost:4200");
    browser.waitForAngularEnabled(false)
    expect(await browser.getCurrentUrl()).toContain('dashboard');

  })

  it('should go to login page', async () => {
    browser.waitForAngularEnabled(false)
    await browser.get("http://localhost:4200/login");
    browser.waitForAngularEnabled(false)
    expect(await browser.getCurrentUrl()).toContain('dashboard');

  })

  it('to check the page title', function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:4200/dashboard');
    browser.driver.getTitle().then(function(pageTitle) {
       expect(pageTitle).toEqual('HooplaMaterialUiSes');
    });
 });

 it('login page', async() => {
  browser.get('http://localhost:4200/dashboard');
  let e = await element(by.name("login"));
  await e.click();
  browser.waitForAngularEnabled(false)
  expect(await browser.getCurrentUrl()).toContain("login")
})


 


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
