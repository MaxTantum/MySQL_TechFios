$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/TechFios_Login.feature");
formatter.feature({
  "line": 2,
  "name": "Validate TechFios Login Page Functionality",
  "description": "",
  "id": "validate-techfios-login-page-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@End2End"
    }
  ]
});
formatter.before({
  "duration": 7025466300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the TechFios Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.userIsOnTheTechFiosLoginPage()"
});
formatter.result({
  "duration": 3903387000,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "User should be able to Login with valid credentials",
  "description": "",
  "id": "validate-techfios-login-page-functionality;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User logs in with valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should be able to land on DashBoard Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "duration": 639169100,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_click_on_Login_button()"
});
formatter.result({
  "duration": 1712636500,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_should_be_able_to_land_on_DashBoard_Page()"
});
formatter.result({
  "duration": 553066500,
  "status": "passed"
});
formatter.after({
  "duration": 648135500,
  "status": "passed"
});
});