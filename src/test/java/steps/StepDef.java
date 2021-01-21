package steps;

import java.sql.SQLException;

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
import util.Database;

public class StepDef {

	WebDriver driver;
	LoginPage login;
	Testbase tb;
	

	@Before
	public void beforeRun() {

		driver = BrowserFactory.startBrowser();
		login = PageFactory.initElements(driver, LoginPage.class);
		tb = PageFactory.initElements(driver, Testbase.class);
	}

	@Given("^User is on the TechFios Login Page$")
	public void userIsOnTheTechFiosLoginPage() {

		driver.get("https://techfios.com/billing/?ng=admin/");
}
	@When("^User logs in with valid credentials$")
	public void user_logs_in_with_valid_credentials() throws Throwable {
	    login.login(Database.get("username"), Database.get("password"));
	    
	}
	
	@When("^User click on Login button$")
	public void user_click_on_Login_button() {
		login.clickSingInButton();
		}

	@Then("^User should be able to land on DashBoard Page$")
	public void user_should_be_able_to_land_on_DashBoard_Page() throws Exception {

		String expectedTitle = "Dashboard- iBilling";
		String actualTitle = login.getPageTitle();
		Assert.assertEquals("Wrong_Page", expectedTitle, actualTitle);
		tb.screenShot(driver, "fileWithPath");
		}
	
	
	
	@After
	public void closeBrowser() {
		driver.close();
		driver.quit();
	}
}
