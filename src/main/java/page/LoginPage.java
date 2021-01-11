package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage {
	
	WebDriver driver;
	
	public LoginPage(WebDriver driver) {
		this.driver = driver;
	}
	
	@FindBy(how = How.ID, using = "username")
	WebElement USERNAME_FIELD_ELEMENT;
	@FindBy(how = How.ID, using = "password")
	WebElement PASSWORD_FIELD_ELEMENT;
	@FindBy(how = How.XPATH, using = "//button[text()='Sign in']")
	WebElement SING_IN_BUTTON_ELEMENT;
	
	public void enterUserName(String username) {
		USERNAME_FIELD_ELEMENT.sendKeys(username);
	}
	public void enterPassword(String password) {
		PASSWORD_FIELD_ELEMENT.sendKeys(password);
	}
	public void clickSingInButton() {
		SING_IN_BUTTON_ELEMENT.click();
	}
	
	public void login(String username, String password) {
		USERNAME_FIELD_ELEMENT.sendKeys(username);
		PASSWORD_FIELD_ELEMENT.sendKeys(password);
		//SING_IN_BUTTON_ELEMENT.click();
	}
	
	public String getPageTitle() {
		return driver.getTitle();
	}

}
