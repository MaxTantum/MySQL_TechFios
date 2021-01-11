package steps;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import page.LoginPage;
import util.BrowserFactory;

public class StepDef {

	WebDriver driver;
	LoginPage login;

	@Before
	public void beforeRun() {

		driver = BrowserFactory.startBrowser();
		login = PageFactory.initElements(driver, LoginPage.class);
	}

	@Given("^User is on the TechFios Login Page$")
	public void userIsOnTheTechFiosLoginPage() {

		driver.get("https://techfios.com/billing/?ng=admin/");

	}
	
	@When("^User enter \"([^\"]*)\" and  \"([^\"]*)\"$")
	public void user_enter_and(String username, String password) {
	    
	    login.login(username, password);
	}


	@When("^User enter username as \"([^\"]*)\"$")
	public void userEnterUsernameAs(String username) {
		login.enterUserName(username);
		// driver.findElement(By.id("username")).sendKeys("demo@techfios.com");

	}

	@When("^User enter password as \"([^\"]*)\"$")
	public void userEnterPasswordAs(String password) {
		login.enterPassword(password);
		// driver.findElement(By.id("password")).sendKeys("abc123");
	}

	@When("^User click on Login button$")
	public void user_click_on_Login_button() {
		login.clickSingInButton();
		// driver.findElement(By.xpath("//button[text()='Sign in']")).click();

	}

	@Then("^User should be able to land on DashBoard Page$")
	public void user_should_be_able_to_land_on_DashBoard_Page() {

		String expectedTitle = "Dashboard- iBilling";
		String actualTitle = login.getPageTitle();
		Assert.assertEquals("Wrong_Page", expectedTitle, actualTitle);

	}

	@After
	public void closeBrowser() {
		driver.close();
		driver.quit();
	}
}
